/* =====================================================================
   ICONIC × ECSEL Expo 2026 — Landing Page
   Interactions : navigation, formulaire multi-étapes, envoi des leads
   ===================================================================== */
(function () {
  "use strict";

  var $  = function (s, c) { return (c || document).querySelector(s); };
  var $$ = function (s, c) { return Array.prototype.slice.call((c || document).querySelectorAll(s)); };

  /* ----------------------------- Année ----------------------------- */
  var yearEl = $("[data-year]");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  /* --------------------------- Navigation -------------------------- */
  var nav = $("[data-nav]");
  var onScroll = function () {
    if (window.scrollY > 40) nav.classList.add("is-scrolled");
    else nav.classList.remove("is-scrolled");
  };
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  /* ------------------------- Menu mobile --------------------------- */
  var menuToggle = $("[data-menu-toggle]");
  var mobileMenu = $("[data-mobile-menu]");
  var closeMenu = function () {
    nav.classList.remove("is-menu-open");
    menuToggle.setAttribute("aria-expanded", "false");
    mobileMenu.hidden = true;
  };
  if (menuToggle) {
    menuToggle.addEventListener("click", function () {
      var open = nav.classList.toggle("is-menu-open");
      menuToggle.setAttribute("aria-expanded", String(open));
      mobileMenu.hidden = !open;
    });
    $$("[data-mobile-link]").forEach(function (a) { a.addEventListener("click", closeMenu); });
  }

  /* -------------------- Révélation au défilement -------------------- */
  var reveals = $$(".reveal");
  if ("IntersectionObserver" in window && reveals.length) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { e.target.classList.add("is-in"); io.unobserve(e.target); }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -8% 0px" });
    reveals.forEach(function (el) { io.observe(el); });
  } else {
    reveals.forEach(function (el) { el.classList.add("is-in"); });
  }

  /* ----------------------- CTA mobile flottant --------------------- */
  var mobileCta = $("[data-mobile-cta]");
  if (mobileCta) {
    var ctaHero = $("#accueil"), ctaOffre = $("#offre"), ctaContact = $("#contact");
    var inView = function (el) {
      if (!el) return false;
      var r = el.getBoundingClientRect();
      var h = window.innerHeight || document.documentElement.clientHeight;
      return r.top < h * 0.9 && r.bottom > h * 0.1;
    };
    var syncCta = function () {
      var show = !inView(ctaHero) && !inView(ctaOffre) && !inView(ctaContact);
      mobileCta.hidden = false;
      mobileCta.classList.toggle("is-visible", show);
    };
    var ctaTicking = false;
    var onCtaScroll = function () {
      if (ctaTicking) return;
      ctaTicking = true;
      requestAnimationFrame(function () { syncCta(); ctaTicking = false; });
    };
    window.addEventListener("scroll", onCtaScroll, { passive: true });
    window.addEventListener("resize", onCtaScroll, { passive: true });
    syncCta();
  }

  /* =================================================================
     FORMULAIRE MULTI-ÉTAPES
     ================================================================= */
  var form = $("#leadForm");
  if (!form) return;

  var steps      = $$(".step", form);
  var totalSteps = steps.length;
  var current    = 1;

  var fillEl    = $("[data-progress-fill]");
  var countEl   = $("[data-step-count]");
  var prevBtn   = $("[data-prev]", form);
  var nextBtn   = $("[data-next]", form);
  var submitBtn = $("[data-submit]", form);
  var reassure  = $("[data-reassure]", form);
  var formcard  = form.closest(".formcard");
  var successEl = $("[data-success]");
  var dots      = $$("[data-step-dot]");

  /* --- Helpers i18n (textes dynamiques) --- */
  var lastFirstName = "";
  function tr(key, fb) { return (window.ICONIC_T && window.ICONIC_T(key)) || fb; }
  function stepCountText(n) { return tr("step.count", "Étape {n} / 5").replace("{n}", n); }
  function renderSuccessTitle() {
    var el = $("[data-success-title]");
    if (!el) return;
    el.textContent = tr("success.title", "Merci {name} !").replace("{name}", lastFirstName).replace(/\s+/g, " ").trim();
  }

  /* --- Champ « Autre » conditionnel --- */
  var otherToggle = $("[data-toggle-other]");
  if (otherToggle) {
    var otherInput = document.getElementById(otherToggle.getAttribute("data-toggle-other"));
    var cb = $("input", otherToggle);
    cb.addEventListener("change", function () {
      otherInput.hidden = !cb.checked;
      if (cb.checked) { otherInput.focus(); }
      else { otherInput.value = ""; }
    });
  }

  /* --- Affichage d'une étape --- */
  function showStep(n, focusIt) {
    current = Math.min(Math.max(n, 1), totalSteps);
    steps.forEach(function (s) { s.hidden = Number(s.getAttribute("data-step")) !== current; });

    dots.forEach(function (d) {
      var i = Number(d.getAttribute("data-step-dot"));
      d.classList.toggle("is-active", i === current);
      d.classList.toggle("is-done", i < current);
    });

    if (fillEl)  fillEl.style.width = (current / totalSteps * 100) + "%";
    if (countEl) countEl.textContent = stepCountText(current);

    prevBtn.hidden   = current === 1;
    nextBtn.hidden   = current === totalSteps;
    submitBtn.hidden = current !== totalSteps;
    reassure.hidden  = current !== totalSteps;

    if (focusIt) {
      var legend = $(".step__legend", steps[current - 1]);
      if (legend) { legend.setAttribute("tabindex", "-1"); legend.focus({ preventScroll: true }); }
    }
  }

  /* --- Erreurs --- */
  function setError(name, msg) {
    var errEl = $('[data-error-for="' + name + '"]', form);
    var input = form.elements[name];
    if (errEl) errEl.textContent = msg || "";
    if (input && input.closest) {
      var field = input.closest(".field");
      if (field) field.classList.toggle("has-error", !!msg);
    }
    var group = $('.opts[data-group="' + name + '"]', form);
    if (group) group.classList.toggle("has-error", !!msg);
  }
  function clearErrors(stepEl) {
    $$("[data-error-for]", stepEl).forEach(function (e) { e.textContent = ""; });
    $$(".field.has-error", stepEl).forEach(function (f) { f.classList.remove("has-error"); });
    $$(".opts.has-error", stepEl).forEach(function (o) { o.classList.remove("has-error"); });
  }

  var emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

  function validateStep(n) {
    var stepEl = steps[n - 1];
    clearErrors(stepEl);
    var ok = true, firstBad = null;

    // champs texte requis
    $$("input[required], textarea[required]", stepEl).forEach(function (inp) {
      var v = (inp.value || "").trim();
      var bad = "";
      if (!v) bad = tr("err.required", "Ce champ est obligatoire.");
      else if (inp.type === "email" && !emailRe.test(v)) bad = tr("err.email", "Adresse e-mail invalide.");
      else if (inp.type === "tel" && v.replace(/[^\d]/g, "").length < 6) bad = tr("err.phone", "Numéro de téléphone invalide.");
      if (bad) { setError(inp.name, bad); ok = false; firstBad = firstBad || inp; }
    });

    // groupes requis (cases / boutons radio)
    $$(".opts[data-required]", stepEl).forEach(function (group) {
      var name = group.getAttribute("data-group");
      var checked = $$('input[name="' + name + '"]:checked', group);
      if (!checked.length) { setError(name, tr("err.group", "Veuillez sélectionner au moins une option.")); ok = false; firstBad = firstBad || group; }
    });

    // champ « Autre » conditionnel
    var autreCb = $('input[name="activite"][value="Autre"]', stepEl);
    if (autreCb && autreCb.checked) {
      var other = document.getElementById("activiteAutre");
      if (!other.value.trim()) {
        other.closest(".field").classList.add("has-error");
        setError("activite", tr("err.autre", "Merci de préciser votre activité."));
        ok = false; firstBad = firstBad || other;
      }
    }

    if (!ok && firstBad && firstBad.scrollIntoView) {
      firstBad.scrollIntoView({ behavior: "smooth", block: "center" });
      if (firstBad.focus) try { firstBad.focus({ preventScroll: true }); } catch (e) {}
    }
    return ok;
  }

  function scrollToCard() {
    if (!formcard) return;
    var top = formcard.getBoundingClientRect().top + window.scrollY - 90;
    window.scrollTo({ top: top, behavior: "smooth" });
  }

  nextBtn.addEventListener("click", function () {
    if (validateStep(current)) { showStep(current + 1, true); scrollToCard(); }
  });
  prevBtn.addEventListener("click", function () { showStep(current - 1, true); scrollToCard(); });

  // Nettoyer l'erreur dès que l'utilisateur corrige
  form.addEventListener("input", function (e) {
    var t = e.target;
    if (t.name) setError(t.name, "");
  });
  form.addEventListener("change", function (e) {
    var t = e.target;
    if (t.name) setError(t.name, "");
  });

  // Entrée = étape suivante (sauf dans un textarea)
  form.addEventListener("keydown", function (e) {
    if (e.key === "Enter" && e.target.tagName !== "TEXTAREA" && current < totalSteps) {
      e.preventDefault(); nextBtn.click();
    }
  });

  /* ------------------------- Collecte des données ------------------------- */
  function collect() {
    var fd = new FormData(form);
    return {
      fullname:      (fd.get("fullname") || "").trim(),
      company:       (fd.get("company") || "").trim(),
      activite:      fd.getAll("activite"),
      activiteAutre: (fd.get("activiteAutre") || "").trim(),
      taille:        fd.get("taille") || "",
      objectifs:     fd.getAll("objectifs"),
      contenu:       fd.getAll("contenu"),
      visibilite:    fd.get("visibilite") || "",
      stand:         (fd.get("stand") || "").trim(),
      message:       (fd.get("message") || "").trim(),
      phone:         (fd.get("phone") || "").trim(),
      email:         (fd.get("email") || "").trim(),
      canal:         fd.get("canal") || ""
    };
  }

  function buildSummary(d) {
    var act = d.activite.map(function (a) { return a === "Autre" && d.activiteAutre ? "Autre : " + d.activiteAutre : a; });
    var L = [
      "NOUVEAU LEAD — ICONIC × ECSEL Expo 2026",
      "——————————————————————",
      "Nom & prénom : " + d.fullname,
      "Entreprise / Marque : " + d.company,
      "Activité : " + (act.join(", ") || "—"),
      "Taille : " + (d.taille || "—"),
      "",
      "Objectifs : " + (d.objectifs.join(", ") || "—"),
      "Contenu souhaité : " + (d.contenu.join(", ") || "—"),
      "Niveau de visibilité : " + (d.visibilite || "—"),
      "Numéro de stand : " + (d.stand || "—"),
      "Message : " + (d.message || "—"),
      "",
      "Téléphone / WhatsApp : " + d.phone,
      "E-mail : " + d.email,
      "Contact préféré : " + (d.canal || "—")
    ];
    return L.join("\n");
  }

  /* ------------------------- Envoi du lead ------------------------- */
  function flatten(d) {
    return {
      fullname: d.fullname, company: d.company,
      activite: d.activite.join(", ") + (d.activiteAutre ? " (" + d.activiteAutre + ")" : ""),
      taille: d.taille, objectifs: d.objectifs.join(", "), contenu: d.contenu.join(", "),
      visibilite: d.visibilite, stand: d.stand, message: d.message,
      phone: d.phone, email: d.email, canal: d.canal
    };
  }

  function waLink(cfg, summary) {
    var num = (cfg.whatsappNumber || "").toString().replace(/[^\d]/g, "");
    if (!num || cfg.sendWhatsApp === false) return "";
    return "https://wa.me/" + num + "?text=" + encodeURIComponent(summary);
  }

  // Canal e-mail (automatique) — renvoie une promesse résolue quand l'e-mail est parti.
  function sendEmail(cfg, d, summary) {
    // 1) Web3Forms (e-mail automatique et silencieux — recommandé)
    if (cfg.web3formsKey) {
      var payload = Object.assign({
        access_key: cfg.web3formsKey,
        subject: "Nouveau lead ICONIC × ECSEL — " + (d.company || d.fullname),
        from_name: "ICONIC × ECSEL — Landing",
        replyto: d.email
      }, flatten(d), { message_resume: summary });
      if (cfg.notifyEmail) payload.ccemail = cfg.notifyEmail;
      return fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", "Accept": "application/json" },
        body: JSON.stringify(payload)
      }).then(function (r) { if (r.ok) return { ok: true }; throw new Error("web3forms"); });
    }
    // 2) Webhook JSON (Make / Zapier / n8n…)
    if (cfg.webhookUrl) {
      return fetch(cfg.webhookUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ source: "ICONIC × ECSEL Landing", submittedAt: new Date().toISOString(), lead: d })
      }).then(function (r) { if (r.ok) return { ok: true }; throw new Error("webhook"); });
    }
    // 3) Fallback : client mail du visiteur (mailto)
    if (cfg.contactEmail) {
      var subject = "Nouveau lead ICONIC × ECSEL — " + (d.company || d.fullname);
      window.location.href = "mailto:" + cfg.contactEmail +
        "?subject=" + encodeURIComponent(subject) + "&body=" + encodeURIComponent(summary);
      return Promise.resolve({ ok: true, channel: "email" });
    }
    // 4) Rien de configuré : ne pas perdre le lead (console)
    console.warn("[ICONIC] Aucun canal e-mail configuré dans js/config.js (web3formsKey / webhookUrl / contactEmail).");
    console.info("[ICONIC] Lead reçu :\n" + summary);
    return Promise.resolve({ ok: true, channel: "none" });
  }

  /* ------------------------- Soumission ------------------------- */
  function showGeneralError(msg) {
    var box = $("[data-form-error]", form);
    if (!box) {
      box = document.createElement("p");
      box.setAttribute("data-form-error", "");
      box.style.cssText = "color:#cf2d7d;text-align:center;margin-top:14px;font-weight:600;";
      form.querySelector(".form__nav").insertAdjacentElement("afterend", box);
    }
    box.textContent = msg;
  }

  function showSuccess(data, waUrl) {
    lastFirstName = data.fullname.split(" ")[0] || "";
    renderSuccessTitle();
    var waBtn = $("[data-success-wa]");
    if (waBtn) {
      if (waUrl) { waBtn.href = waUrl; waBtn.hidden = false; }
      else { waBtn.hidden = true; }
    }
    form.hidden = true;
    var prog = $(".progress"); if (prog) prog.hidden = true;
    if (countEl) countEl.hidden = true;
    successEl.hidden = false;
    scrollToCard();
  }

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    if (!validateStep(totalSteps)) return;

    var data = collect();
    var cfg = window.ICONIC_LEAD_CONFIG || {};
    var summary = buildSummary(data);
    var waUrl = waLink(cfg, summary);
    var hasSilentEmail = !!(cfg.web3formsKey || cfg.webhookUrl);

    // WhatsApp : ouvrir dans le geste utilisateur (évite le blocage du popup).
    // Ouverture auto seulement si l'e-mail est silencieux, sinon mailto + WhatsApp
    // ouvriraient deux applications en même temps (le bouton de succès gère ce cas).
    if (waUrl && hasSilentEmail) window.open(waUrl, "_blank");

    submitBtn.classList.add("is-loading");
    submitBtn.disabled = true;

    sendEmail(cfg, data, summary).then(function () {
      submitBtn.classList.remove("is-loading");
      submitBtn.disabled = false;
      showSuccess(data, waUrl);
    }).catch(function () {
      submitBtn.classList.remove("is-loading");
      submitBtn.disabled = false;
      if (waUrl) showSuccess(data, waUrl);
      else showGeneralError(tr("err.network", "Impossible d'envoyer pour le moment. Vérifiez votre connexion et réessayez."));
    });
  });

  /* Mise à jour des textes dynamiques au changement de langue */
  document.addEventListener("iconic:langchange", function () {
    if (countEl) countEl.textContent = stepCountText(current);
    if (successEl && !successEl.hidden) renderSuccessTitle();
  });

  /* Init */
  showStep(1, false);
})();
