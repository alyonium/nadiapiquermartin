// todo: на всякий случай оставляю - вдруг iframe перестанет работать

// import React, { useEffect } from 'react';
//
// const DoctoraliaWidget = () => {
//   useEffect(() => {
//     // Функция для загрузки скрипта виджета
//     const loadWidgetScript = () => {
//       if (!document.getElementById('zl-widget-s')) {
//         const script = document.createElement('script');
//         script.id = 'zl-widget-s';
//         script.src = '//platform.docplanner.com/js/widget.js';
//         script.async = true;
//         document.body.appendChild(script);
//       }
//     };
//
//     loadWidgetScript();
//   }, []); // Пустой массив зависимостей, чтобы скрипт загружался только один раз
//
//   return (
//     <a
//       id="zl-url"
//       className="zl-url"
//       href="https://www.doctoralia.es/nadia-piquer-martin/ginecologo/valencia"
//       rel="nofollow"
//       data-zlw-doctor="nadia-piquer-martin"
//       data-zlw-type="big_with_calendar"
//       data-zlw-opinion="false"
//       data-zlw-hide-branding="true"
//       data-zlw-saas-only="true"
//     >
//       Nadia Piquer Martín - Doctoralia.es
//     </a>
//   );
// };
//
// export default DoctoraliaWidget;
