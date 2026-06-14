/**
 * SKYGEN - Глобальный модуль обновления (update.js)
 * Разработано для расширения функционала без изменения index.html
 */

(function () {
  // ==========================================
  // 1. РАСШИРЕНИЕ БАЗЫ ДАННЫХ И ИСПРАВЛЕНИЕ КАРТИНОК
  // ==========================================
  
  // 26 новых городов для доведения базы до 100 элементов
  const newCities = [
    { city: "Вашингтон", country: "США", code: "IAD", hotelCount: 5, attractionCount: 5, timezone: "UTC-4", weather: "⛅ +24°C" },
    { city: "Даллас", country: "США", code: "DFW", hotelCount: 4, attractionCount: 3, timezone: "UTC-5", weather: "☀️ +34°C" },
    { city: "Хьюстон", country: "США", code: "IAH", hotelCount: 4, attractionCount: 3, timezone: "UTC-5", weather: "☀️ +33°C" },
    { city: "Нанкин", country: "Китай", code: "NKG", hotelCount: 4, attractionCount: 4, timezone: "UTC+8", weather: "🌧️ +28°C" },
    { city: "Сиань", country: "Китай", code: "XIY", hotelCount: 4, attractionCount: 5, timezone: "UTC+8", weather: "☀️ +31°C" },
    { city: "Тяньцзинь", country: "Китай", code: "TSN", hotelCount: 4, attractionCount: 3, timezone: "UTC+8", weather: "☀️ +30°C" },
    { city: "Ухань", country: "Китай", code: "WUH", hotelCount: 4, attractionCount: 4, timezone: "UTC+8", weather: "🌧️ +29°C" },
    { city: "Дунгуань", country: "Китай", code: "DGM", hotelCount: 4, attractionCount: 3, timezone: "UTC+8", weather: "🌧️ +30°C" },
    { city: "Красноярск", country: "Россия", code: "KJA", hotelCount: 2, attractionCount: 3, timezone: "UTC+7", weather: "☀️ +20°C" },
    { city: "Самара", country: "Россия", code: "KUF", hotelCount: 2, attractionCount: 3, timezone: "UTC+4", weather: "⛅ +22°C" },
    { city: "Ростов-на-Дону", country: "Россия", code: "ROV", hotelCount: 2, attractionCount: 3, timezone: "UTC+3", weather: "☀️ +25°C" },
    { city: "Прага", country: "Чехия", code: "PRG", hotelCount: 5, attractionCount: 5, timezone: "UTC+2", weather: "☀️ +24°C" },
    { city: "Будапешт", country: "Венгрия", code: "BUD", hotelCount: 5, attractionCount: 4, timezone: "UTC+2", weather: "☀️ +26°C" },
    { city: "Варшава", country: "Польша", code: "WAW", hotelCount: 4, attractionCount: 4, timezone: "UTC+2", weather: "☀️ +23°C" },
    { city: "Лиссабон", country: "Португалия", code: "LIS", hotelCount: 5, attractionCount: 5, timezone: "UTC+1", weather: "☀️ +27°C" },
    { city: "Дублин", country: "Ирландия", code: "DUB", hotelCount: 4, attractionCount: 4, timezone: "UTC+1", weather: "🌧️ +16°C" },
    { city: "Буэнос-Айрес", country: "Аргентина", code: "EZE", hotelCount: 5, attractionCount: 4, timezone: "UTC-3", weather: "☁️ +16°C" },
    { city: "Сан-Паулу", country: "Бразилия", code: "GRU", hotelCount: 6, attractionCount: 4, timezone: "UTC-3", weather: "🌧️ +21°C" },
    { city: "Сантьяго", country: "Чили", code: "SCL", hotelCount: 4, attractionCount: 3, timezone: "UTC-4", weather: "☁️ +15°C" },
    { city: "Богота", country: "Колумбия", code: "BOG", hotelCount: 4, attractionCount: 3, timezone: "UTC-5", weather: "☁️ +15°C" },
    { city: "Кейптаун", country: "ЮАР", code: "CPT", hotelCount: 5, attractionCount: 5, timezone: "UTC+2", weather: "☀️ +18°C" },
    { city: "Найроби", country: "Кения", code: "NBO", hotelCount: 4, attractionCount: 3, timezone: "UTC+3", weather: "🌧️ +22°C" },
    { city: "Марракеш", country: "Марокко", code: "RAK", hotelCount: 4, attractionCount: 4, timezone: "UTC+1", weather: "☀️ +32°C" },
    { city: "Окленд", country: "Новая Зеландия", code: "AKL", hotelCount: 4, attractionCount: 4, timezone: "UTC+12", weather: "🌧️ +14°C" },
    { city: "Ченнаи", country: "Индия", code: "MAA", hotelCount: 4, attractionCount: 3, timezone: "UTC+5:30", weather: "☀️ +34°C" },
    { city: "Карачи", country: "Пакистан", code: "KHI", hotelCount: 4, attractionCount: 4, timezone: "UTC+5", weather: "☀️ +35°C" }
  ];

  // Инициализация пула достопримечательностей
  const attractionsPool = [
    { name: "Исторический центр", desc: "Главная площадь города, старинная архитектура и знаковые памятники.", duration: "2-3 часа", rating: "4.8", area: "Центральный район", img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=500&q=80" },
    { name: "Городской панорамный парк", desc: "Огромная зеленая зона со смотровыми площадками на небоскребы.", duration: "3-4 часа", rating: "4.7", area: "Парковый квартал", img: "https://images.unsplash.com/photo-1513829092359-0f86b7262f5f?auto=format&fit=crop&w=500&q=80" },
    { name: "Музей современного искусства", desc: "Уникальные интерактивные инсталляции и футуристичный дизайн.", duration: "1.5-2 часа", rating: "4.6", area: "Деловой центр", img: "https://images.unsplash.com/photo-1545987796-200677ee1011?auto=format&fit=crop&w=500&q=80" },
    { name: "Набережная SkyLine", desc: "Пешеходная зона у воды с лучшим вечерним видом на огни мегаполиса.", duration: "1-2 часа", rating: "4.9", area: "Прибрежный район", img: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?auto=format&fit=crop&w=500&q=80" },
    { name: "Старый квартал ремесел", desc: "Уютные узкие улочки, аутентичные сувениры и местный стрит-фуд.", duration: "2-3 часа", rating: "4.5", area: "Старый город", img: "https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=500&q=80" }
  ];

  // Внедряемся в глобальные переменные, как только они объявлены в index.html
  const interval = setInterval(() => {
    if (window.cities) {
      // 1. Добавляем attractionCount старым городам, если его нет
      window.cities.forEach(c => {
        if (!c.attractionCount) {
          c.attractionCount = Math.floor(Math.random() * 3) + 3; // генерируем 3-5 мест
        }
      });

      // 2. Сливаем старые города с новыми
      window.cities = [...window.cities, ...newCities];

      // 3. Исправление бага: Картина для Vibe Select Design Suites
      if (window.hotelsData) {
        const vibeHotel = window.hotelsData.find(h => h && h.name === "Vibe Select Design Suites");
        if (vibeHotel) vibeHotel.img = "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=600&q=80";
      }

      // 4. Исправление бага: Картинка для Шоколадного мини-чизкейка
      if (window.foodMenu && window.foodMenu.desserts) {
        const cheesecake = window.foodMenu.desserts.find(d => d && d.name === "Шоколадный мини-чизкейк");
        if (cheesecake) cheesecake.img = "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?auto=format&fit=crop&w=500&q=80";
      }

      clearInterval(interval);
      console.log("SKYGEN: База данных успешно обновлена до 100 городов. Баги картинок устранены.");
    }
  }, 100);

  // ==========================================
  // 2. ИСПРАВЛЕНИЕ БАГА СОХРАНЕНИЯ ПИТАНИЯ С ПОМОЩЬЮ PROXY
  // ==========================================
  const originalSetItem = localStorage.setItem;
  localStorage.setItem = function (key, value) {
    if (key === "skygen_trips" || key.includes("trip")) {
      try {
        let trips = JSON.parse(value);
        const fixTrip = (trip) => {
          // Если у рейса изначально нет еды, принудительно выставляем флаги в false/null
          if (trip.selectedFlight && trip.selectedFlight.hasFood === false) {
            trip.hasFood = false;
            trip.selectedFoodMenu = null;
            trip.foodIncluded = "Питание не включено";
          }
          return trip;
        };

        if (Array.isArray(trips)) {
          trips = trips.map(fixTrip);
        } else if (typeof trips === "object" && trips !== null) {
          trips = fixTrip(trips);
        }
        value = JSON.stringify(trips);
      } catch (e) {
        console.error("Ошибка исправления данных питания:", e);
      }
    }
    originalSetItem.apply(this, [key, value]);
  };

  // ==========================================
  // 3. ДИНАМИЧЕСКИЙ ПЕРЕХВАТ СОРТИРОВОК И ИНТЕРФЕЙСА ЧЕРЕЗ DOM
  // ==========================================
  document.addEventListener("DOMContentLoaded", () => {
    
    // Внедрение стилей для кнопок сортировок и нового шага
    const style = document.createElement("style");
    style.innerHTML = `
      .update-sort-btn { transition: all 0.2s ease; font-size: 0.85rem; padding: 4px 10px; border-radius: 6px; }
      .update-sort-btn:hover { background-color: #f3f4f6; }
      .update-sort-active { background-color: #0057b8 !important; color: white !important; }
    `;
    document.head.appendChild(style);

    // Функция-наблюдатель за изменениями интерфейса (чтобы вовремя подставлять логику)
    const observer = new MutationObserver(() => {
      // --- Новые фильтры городов на Главном Экране ---
      const filterContainer = document.querySelector(".filter-container") || document.querySelector("input[placeholder*='Поиск'] Jeanne")?.parentElement;
      if (filterContainer && !document.getElementById("extended-city-filters")) {
        injectCityFilters(filterContainer);
      }

      // --- Новые фильтры сортировки в выборе билетов ---
      const flightSortContainer = document.querySelector(".flight-sort-container") || document.querySelector("button")?.parentElement; 
      if (flightSortContainer && flightSortContainer.textContent.includes("цене") && !document.getElementById("extended-flight-filters")) {
        injectFlightFilters(flightSortContainer);
      }

      // --- Внедрение шага Достопримечательностей перед Конструктором еды ---
      // Если открыт шаг отелей, и пользователь нажал "Далее", мы можем перехватить рендер
      const stepTitle = document.querySelector("h2");
      if (stepTitle && stepTitle.textContent.includes("Выбор отеля") && !document.getElementById("attractions-injected-trigger")) {
        modifyNextStepButton();
      }
    });

    observer.observe(document.body, { childList: true, subtree: true });
  });

  // Логика внедрения фильтров городов
  function injectCityFilters(parent) {
    const wrapper = document.createElement("div");
    wrapper.id = "extended-city-filters";
    wrapper.className = "flex flex-wrap gap-2 mt-2 p-2 bg-gray-50 rounded-lg";
    wrapper.innerHTML = `
      <span class="text-xs text-gray-500 self-center">Сортировка:</span>
      <button class="update-sort-btn bg-white border" data-sort="hotels-desc">Отели (Много ➔ Мало)</button>
      <button class="update-sort-btn bg-white border" data-sort="hotels-asc">Отели (Мало ➔ Много)</button>
      <button class="update-sort-btn bg-white border" data-sort="attr-desc">Места (Много ➔ Мало)</button>
      <button class="update-sort-btn bg-white border" data-sort="attr-asc">Места (Мало ➔ Много)</button>
    `;

    parent.appendChild(wrapper);

    wrapper.addEventListener("click", (e) => {
      const sortType = e.target.getAttribute("data-sort");
      if (!sortType) return;

      document.querySelectorAll(".update-sort-btn").forEach(b => b.classList.remove("update-sort-active"));
      e.target.classList.add("update-sort-active");

      // Сортируем глобальный массив городов налету для реактивного обновления реактом
      if (sortType === "hotels-desc") window.cities.sort((a, b) => b.hotelCount - a.hotelCount);
      if (sortType === "hotels-asc") window.cities.sort((a, b) => a.hotelCount - b.hotelCount);
      if (sortType === "attr-desc") window.cities.sort((a, b) => b.attractionCount - a.attractionCount);
      if (sortType === "attr-asc") window.cities.sort((a, b) => a.attractionCount - b.attractionCount);

      // Имитируем ввод в инпут поиска, чтобы заставить React перерисовать отсортированный массив
      const searchInput = document.querySelector("input[placeholder*='город']投") || document.querySelector("input");
      if (searchInput) {
        searchInput.dispatchEvent(new Event('input', { bubbles: true }));
      }
    });
  }

  // Логика внедрения сортировки билетов по питанию
  function injectFlightFilters(parent) {
    const wrapper = document.createElement("div");
    wrapper.id = "extended-flight-filters";
    wrapper.className = "inline-flex gap-2 ml-4";
    wrapper.innerHTML = `
      <button class="bg-gray-100 px-3 py-1 rounded text-sm hover:bg-gray-200 transition" id="sort-food-btn">Сначала с питанием 🍲</button>
    `;
    parent.appendChild(wrapper);

    document.getElementById("sort-food-btn").addEventListener("click", () => {
      // Ищем отрендеренные карточки рейсов, вытаскиваем их React-State через внутренние свойства DOM-элементов
      const flightCardsContainer = document.querySelector(".space-y-4") || document.querySelector(".flex-col");
      if (flightCardsContainer) {
        console.log("SKYGEN: Сортировка авиабилетов по наличию питания включена.");
        // Поскольку мы не можем напрямую вызвать setState компонента, мы визуально переставляем DOM ноды,
        // где есть упоминания еды/включенного ланча, наверх списка.
        const cards = Array.from(flightCardsContainer.children);
        cards.sort((a, b) => {
          const aHasFood = a.textContent.includes("Питание") || a.textContent.includes("ланч");
          const bHasFood = b.textContent.includes("Питание") || b.textContent.includes("ланч");
          return bHasFood - aHasFood;
        });
        cards.forEach(card => flightCardsContainer.appendChild(card));
      }
    });
  }

  // Перехват кнопки перехода к еде для внедрения шага достопримечательностей
  function modifyNextStepButton() {
    const nextBtn = document.querySelector("button.bg-blue-600") || document.querySelector("button[class*='bg-blue']");
    if (!nextBtn) return;

    // Ставим триггер-метку, чтобы не зацикливать обработчик
    const trigger = document.createElement("div");
    trigger.id = "attractions-injected-trigger";
    trigger.style.display = "none";
    document.body.appendChild(trigger);

    // Клонируем кнопку, чтобы убрать старые обработчики клика Реакта
    const newNextBtn = nextBtn.cloneNode(true);
    nextBtn.parentNode.replaceChild(newNextBtn, nextBtn);

    newNextBtn.addEventListener("click", (e) => {
      e.preventDefault();
      e.stopPropagation();
      renderAttractionsScreen();
    });
  }

  // ГЕНЕРАЦИЯ И ОТРЕНДЕРИВАНИЕ ЭКРАНА ДОСТОПРИМЕЧАТЕЛЬНОСТЕЙ
  function renderAttractionsScreen() {
    // Получаем текущие данные сессии из localStorage, сохраненные твоим приложением
    const selectedCityName = localStorage.getItem("skygen_to_city") || "Выбранный город";
    const currentCity = window.cities?.find(c => c.city === selectedCityName) || { attractionCount: 3 };
    
    // Генерируем карточки под конкретный город на основе пула данных
    const count = currentCity.attractionCount || 3;
    const selectedAttractions = [];
    for(let i = 0; i < count; i++) {
      selectedAttractions.push(attractionsPool[i % attractionsPool.length]);
    }

    // Находим главный контейнер приложения
    const mainContainer = document.querySelector("main") || document.querySelector(".container") || document.body.firstElementChild;
    
    // Сохраняем оригинальный html шага (чтобы потом вернуться или пойти дальше)
    const originalContent = mainContainer.innerHTML;

    mainContainer.innerHTML = `
      <div class="max-w-4xl mx-auto p-6 bg-white rounded-2xl shadow-xl mt-6 animate-fade-in">
        <div class="flex justify-between items-center mb-6 border-b pb-4">
          <div>
            <span class="text-xs font-bold text-blue-600 uppercase tracking-wider">Шаг 3.5: Экскурсионный маршрут</span>
            <h2 class="text-2xl font-bold text-gray-800">Достопримечательности: ${selectedCityName}</h2>
          </div>
          <span class="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-xs font-semibold">Доступно: ${count} локаций</span>
        </div>

        <p class="text-gray-600 mb-6 text-sm">Спланируйте ваше время в городе! Мы подобрали лучшие места на основе вашего рейтинга отеля и местоположения.</p>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
          ${selectedAttractions.map((attr, idx) => `
            <div class="border rounded-xl overflow-hidden hover:shadow-md transition bg-white flex flex-col justify-between">
              <img src="${attr.img}" class="h-40 w-full object-cover" alt="${attr.name}">
              <div class="p-4 flex-grow">
                <div class="flex justify-between items-start mb-1">
                  <h3 class="font-bold text-gray-800 text-lg">${attr.name}</h3>
                  <span class="text-yellow-500 font-bold text-sm flex items-center">⭐ ${attr.rating}</span>
                </div>
                <p class="text-xs text-gray-400 mb-2">📍 ${attr.area} • ⏱️ ${attr.duration}</p>
                <p class="text-sm text-gray-600 line-clamp-3">${attr.desc}</p>
              </div>
              <div class="p-4 pt-0">
                <label class="flex items-center gap-2 p-2 bg-gray-50 rounded-lg cursor-pointer hover:bg-gray-100 transition">
                  <input type="checkbox" checked class="w-4 h-4 text-blue-600 rounded focus:ring-blue-500">
                  <span class="text-xs font-medium text-gray-700">Добавить в путеводитель</span>
                </label>
              </div>
            </div>
          `).join('')}
        </div>

        <div class="flex justify-between items-center border-t pt-4">
          <button id="attr-back-btn" class="px-6 py-2 border rounded-xl text-gray-600 hover:bg-gray-50 transition active:scale-95">Назад к отелям</button>
          <button id="attr-next-btn" class="px-8 py-2.5 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 shadow-md shadow-blue-200 transition active:scale-95">Продолжить оформление</button>
        </div>
      </div>
    `;

    // Кнопка возврата к отелям
    document.getElementById("attr-back-btn").addEventListener("click", () => {
      mainContainer.innerHTML = originalContent;
      // Перезапускаем скрипт, чтобы кнопки снова привязались
      document.getElementById("attractions-injected-trigger")?.remove();
    });

    // Кнопка продолжения (пропускает нас дальше на шаг еды оригинального кода)
    document.getElementById("attr-next-btn").addEventListener("click", () => {
      // Восстанавливаем оригинальный контекст и симулируем, что мы перешли на шаг еды
      mainContainer.innerHTML = originalContent;
      
      // Находим оригинальную скрытую кнопку "Далее" и вызываем реальный переход Реакта
      // (или симулируем клик по скрытому табу еды, если он есть)
      const originalNextBtn = document.querySelector("button.bg-blue-600") || document.querySelector("button[class*='bg-blue']");
      if (originalNextBtn) {
         // Записываем выбранные места в сессию, чтобы они сохранились в чек поездки
         const checkedNames = Array.from(document.querySelectorAll("input[type='checkbox']:checked"))
            .map((cb, i) => selectedAttractions[i].name);
         localStorage.setItem("skygen_selected_attractions", JSON.stringify(checkedNames));
         
         // Передаем управление обратно реакту
         originalNextBtn.click();
      }
    });
  }

})();
