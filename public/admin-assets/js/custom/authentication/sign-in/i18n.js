﻿'use strict';
var KTAuthI18nDemo = (function () {
 var e,
  n,
  a = {
   'general-progress': {
    English: 'لطفا صبر کنید...',
    Spanish: 'Iniciar Sesión',
    German: 'Registrarse',
    ژاپنese: 'ログイン',
    French: "S'identifier",
   },
   'general-desc': {
    English: 'دسترسی نامحدود داشته باشید و درآمد کسب کنید',
    Spanish: 'Obtenga acceso ilimitado y gane dinero',
    German: 'Erhalten Sie unbegrenzten Zugriff und verdienen Sie Geld',
    ژاپنese: '無制限のアクセスを取得してお金を稼ぐ',
    French: "Obtenez un accès illimité et gagnez de l'argent",
   },
   'general-or': {
    English: 'یا',
    Spanish: 'O',
    German: 'Oder',
    ژاپنese: 'または',
    French: 'Ou',
   },
   'sign-in-head-desc': {
    English: 'آیا هنوز عضو نشده؟',
    Spanish: '¿No eres miembro todavía?',
    German: 'Noch kein Mitglied?',
    ژاپنese: 'まだメンバーではありませんか？',
    French: 'Pas encore membre?',
   },
   'sign-in-head-link': {
    English: 'Sign Up',
    Spanish: 'Inscribirse',
    German: 'Anmeldung',
    ژاپنese: 'サインアップ',
    French: "S'S'inscrire",
   },
   'sign-in-title': {
    English: 'Sign In',
    Spanish: 'Iniciar Sesión',
    German: 'Registrarse',
    ژاپنese: 'ログイン',
    French: "S'identifier",
   },
   'sign-in-input-email': {
    English: 'Email',
    Spanish: 'Correo electrónico',
    German: 'Email',
    ژاپنese: 'Eメール',
    French: 'E-mail',
   },
   'sign-in-input-password': {
    English: 'Password',
    Spanish: 'Clave',
    German: 'Passwort',
    ژاپنese: 'パスワード',
    French: 'Mot de passe',
   },
   'sign-in-forgot-password': {
    English: 'Forgot Password ?',
    Spanish: 'Has olvidado tu contraseña ?',
    German: 'Passwort vergessen ?',
    ژاپنese: 'パスワードをお忘れですか ？',
    French: 'Mot de passe oublié ?',
   },
   'sign-in-submit': {
    English: 'Sign In',
    Spanish: 'Iniciar Sesión',
    German: 'Registrarse',
    ژاپنese: 'ログイン',
    French: "S'identifier",
   },
   'sign-up-head-desc': {
    English: 'Already a member ?',
    Spanish: 'Ya eres usuario ?',
    German: 'Schon ein Mitglied ?',
    ژاپنese: 'すでにメンバーですか？',
    French: 'Déjà membre ?',
   },
   'sign-up-head-link': {
    English: 'Sign In',
    Spanish: 'Iniciar Sesión',
    German: 'Registrarse',
    ژاپنese: 'ログイン',
    French: "S'identifier",
   },
   'sign-up-title': {
    English: 'Sign Up',
    Spanish: 'Inscribirse',
    German: 'Anmeldung',
    ژاپنese: 'サインアップ',
    French: "S'S'inscrire",
   },
   'sign-up-input-first-name': {
    English: 'First Name',
    Spanish: 'Primer nombre',
    German: 'Vorname',
    ژاپنese: 'ファーストネーム',
    French: 'Prénom',
   },
   'sign-up-input-last-name': {
    English: 'Last Name',
    Spanish: 'Apellido',
    German: 'Nachname',
    ژاپنese: '苗字',
    French: 'Nom de famille',
   },
   'sign-up-input-email': {
    English: 'Email',
    Spanish: 'Correo electrónico',
    German: 'Email',
    ژاپنese: 'Eメール',
    French: 'E-mail',
   },
   'sign-up-input-password': {
    English: 'Password',
    Spanish: 'Clave',
    German: 'Passwort',
    ژاپنese: 'パスワード',
    French: 'Mot de passe',
   },
   'sign-up-input-confirm-password': {
    English: 'Password',
    Spanish: 'Clave',
    German: 'Passwort',
    ژاپنese: 'パスワード',
    French: 'Mot de passe',
   },
   'sign-up-submit': {
    English: 'Submit',
    Spanish: 'Iniciar Sesión',
    German: 'Registrarse',
    ژاپنese: 'ログイン',
    French: "S'identifier",
   },
   'sign-up-hint': {
    English:
     'Use 8 or more characters with a mix of letters, numbers & symbols.',
    Spanish:
     'Utilice 8 o más caracteres con una combinación de letras, números y símbolos.',
    German:
     'Verwenden Sie 8 oder mehr Zeichen mit einer Mischung aus Buchstaben, Zahlen und Symbolen.',
    ژاپنese: '文字、数字、記号を組み合わせた8文字以上を使用してください。',
    French:
     'Utilisez 8 caractères ou plus avec un mélange de lettres, de chiffres et de symboles.',
   },
   'new-password-head-desc': {
    English: 'Already a member ?',
    Spanish: 'Ya eres usuario ?',
    German: 'Schon ein Mitglied ?',
    ژاپنese: 'すでにメンバーですか？',
    French: 'Déjà membre ?',
   },
   'new-password-head-link': {
    English: 'Sign In',
    Spanish: 'Iniciar Sesión',
    German: 'Registrarse',
    ژاپنese: 'ログイン',
    French: "S'identifier",
   },
   'new-password-title': {
    English: 'Setup New Password',
    Spanish: 'Configurar nueva contraseña',
    German: 'Neues Passwort einrichten',
    ژاپنese: '新しいパスワードを設定する',
    French: 'Configurer un nouveau mot de passe',
   },
   'new-password-desc': {
    English: 'Have you already reset the password ?',
    Spanish: '¿Ya has restablecido la contraseña?',
    German: 'Hast du das Passwort schon zurückgesetzt?',
    ژاپنese: 'すでにパスワードをリセットしましたか？',
    French: 'Avez-vous déjà réinitialisé le mot de passe ?',
   },
   'new-password-input-password': {
    English: 'Password',
    Spanish: 'Clave',
    German: 'Passwort',
    ژاپنese: 'パスワード',
    French: 'Mot de passe',
   },
   'new-password-hint': {
    English:
     'Use 8 or more characters with a mix of letters, numbers & symbols.',
    Spanish:
     'Utilice 8 o más caracteres con una combinación de letras, números y símbolos.',
    German:
     'Verwenden Sie 8 oder mehr Zeichen mit einer Mischung aus Buchstaben, Zahlen und Symbolen.',
    ژاپنese: '文字、数字、記号を組み合わせた8文字以上を使用してください。',
    French:
     'Utilisez 8 caractères ou plus avec un mélange de lettres, de chiffres et de symboles.',
   },
   'new-password-confirm-password': {
    English: 'Confirm Password',
    Spanish: 'Confirmar contraseña',
    German: 'Passwort bestätigen',
    ژاپنese: 'パスワードを認証する',
    French: 'Confirmez le mot de passe',
   },
   'new-password-submit': {
    English: 'Submit',
    Spanish: 'Iniciar Sesión',
    German: 'Registrarse',
    ژاپنese: 'ログイン',
    French: "S'identifier",
   },
   'password-reset-head-desc': {
    English: 'Already a member ?',
    Spanish: 'Ya eres usuario ?',
    German: 'Schon ein Mitglied ?',
    ژاپنese: 'すでにメンバーですか？',
    French: 'Déjà membre ?',
   },
   'password-reset-head-link': {
    English: 'Sign In',
    Spanish: 'Iniciar Sesión',
    German: 'Registrarse',
    ژاپنese: 'ログイン',
    French: "S'identifier",
   },
   'password-reset-title': {
    English: 'Forgot Password ?',
    Spanish: 'Has olvidado tu contraseña ?',
    German: 'Passwort vergessen ?',
    ژاپنese: 'パスワードをお忘れですか ？',
    French: 'Mot de passe oublié ?',
   },
   'password-reset-desc': {
    English: 'Enter your email to reset your password.',
    Spanish: 'Ingrese su correo electrónico para restablecer su contraseña.',
    German:
     'Geben Sie Ihre E-Mail-Adresse ein, um Ihr Passwort zurückzusetzen.',
    ژاپنese: 'メールアドレスを入力してパスワードをリセットしてください。',
    French: 'Entrez votre e-mail pour réinitialiser votre mot de passe.',
   },
   'password-reset-input-email': {
    English: 'Email',
    Spanish: 'Correo electrónico',
    German: 'Email',
    ژاپنese: 'Eメール',
    French: 'E-mail',
   },
   'password-reset-submit': {
    English: 'Submit',
    Spanish: 'Iniciar Sesión',
    German: 'Registrarse',
    ژاپنese: 'ログイン',
    French: "S'identifier",
   },
   'password-reset-cancel': {
    English: 'Cancel',
    Spanish: 'Cancelar',
    German: 'Absagen',
    ژاپنese: 'キャンセル',
    French: 'Annuler',
   },
   'two-step-head-desc': {
    English: 'Didn’t get the code ?',
    Spanish: '¿No recibiste el código?',
    German: 'Code nicht erhalten?',
    ژاپنese: 'コードを取得できませんでしたか？',
    French: "Vous n'avez pas reçu le code ?",
   },
   'two-step-head-resend': {
    English: 'ارسال مجدد',
    Spanish: 'Reenviar',
    German: 'Erneut senden',
    ژاپنese: '再送',
    French: 'Renvoyer',
   },
   'two-step-head-or': {
    English: 'یا',
    Spanish: 'O',
    German: 'Oder',
    ژاپنese: 'または',
    French: 'Ou',
   },
   'two-step-head-call-us': {
    English: 'با ما تماس بگیرید',
    Spanish: 'Llámenos',
    German: 'Rufen Sie uns an',
    ژاپنese: 'お電話ください',
    French: 'Appelez-nous',
   },
   'two-step-submit': {
    English: 'Submit',
    Spanish: 'Iniciar Sesión',
    German: 'Registrarse',
    ژاپنese: 'ログイン',
    French: "S'identifier",
   },
   'two-step-title': {
    English: 'تایید دو مرحله ای',
    Spanish: 'Verificación de dos pasos',
    German: 'Verifizierung in zwei Schritten',
    ژاپنese: '2段階認証',
    French: 'Vérification en deux étapes',
   },
   'two-step-deck': {
    English: 'کد تأییدی را که به آن فرستادیم وارد کنید',
    Spanish: 'Ingresa el código de verificación que enviamos a',
    German: 'Geben Sie den von uns gesendeten Bestätigungscode ein',
    ژاپنese: '送信した確認コードを入力してください',
    French: 'Entrez le code de vérification que nous avons envoyé à',
   },
   'two-step-label': {
    English: 'کد امنیتی 6 رقمی خود را تایپ کنید',
    Spanish: 'Escriba su código de seguridad de 6 dígitos',
    German: 'Geben Sie Ihren 6-stelligen Sicherheitscode ein',
    ژاپنese: '6桁のセキュリティコードを入力します',
    French: 'Tapez votre code de sécurité à 6 chiffres',
   },
  },
  s = function (e) {
   for (var n in a)
    if (a.hasOwnProperty(n) && a[n][e]) {
     let s = document.querySelector('[data-kt-translate=' + n + ']');
     null !== s &&
      ('INPUT' === s.tagName
       ? s.setAttribute('placeholder', a[n][e])
       : (s.innerHTML = a[n][e]));
    }
  },
  i = function (n) {
   const a = e.querySelector('[data-kt-lang="' + n + '"]');
   if (null !== a) {
    const e = document.querySelector('[data-kt-element="current-lang-name"]'),
     s = document.querySelector('[data-kt-element="current-lang-flag"]'),
     i = a.querySelector('[data-kt-element="lang-name"]'),
     r = a.querySelector('[data-kt-element="lang-flag"]');
    (e.innerText = i.innerText),
     s.setAttribute('src', r.getAttribute('src')),
     localStorage.setItem('kt_auth_lang', n);
   }
  };
 return {
  init: function () {
   null !== (e = document.querySelector('#kt_auth_lang_menu')) &&
    ((n = KTMenu.getInstance(e)),
    (function () {
     if (null !== localStorage.getItem('kt_auth_lang')) {
      let e = localStorage.getItem('kt_auth_lang');
      i(e), s(e);
     }
     n.on('kt.menu.link.click', function (e) {
      let n = e.getAttribute('data-kt-lang');
      i(n), s(n);
     });
    })());
  },
 };
})();
KTUtil.onDOMContentLoaded(function () {
 KTAuthI18nDemo.init();
});