export const bar = [
  {
    categoryName: 'Классика',
    drinks: [
      {
        title: 'Old & Fashioned',
        iconsPublic: ['glass'],
        iconsBartender: ['method'],
        tastes: `Сладкий/горький,\nКрепкий`,
        contents: 'Бурбон, сахарный сироп, ангостура, апельсин',
        recipe: `Бурбон — 60 мл\nСахарный сироп — 10 мл\nАнгостура — 3 дэша\nАпельсин — 1/4 дольки`,
        decoration: 'Украшение: цедра апельсина',
      },
      {
        title: 'Whiskey sour',
        iconsPublic: ['glass'],
        iconsBartender: ['method'],
        tastes: 'Крепкий',
        contents: 'Бурбон, Сахарный сироп, Лимонный сок, Белок яйца',
        recipe: `Бурбон — 60 мл\nСахарный сироп — 20 мл\nЛимонный сок — 25 мл\nБелок яйца`,
        decoration: 'Украшение: цедра лимона, ангостура',
      },
      {
        title: 'Amaretto sour',
        iconsPublic: ['glass'],
        iconsBartender: ['shaker'],
        tastes: `Сладкий\nСредняя крепость`,
        contents: 'Амаретто, Бурбон, Лимонный сок, Сахарный сироп, Белок яйца',
        recipe: `Амаретто — 45 мл
Бурбон — 25 мл
Лимонный сок — 30 мл
Сахарный сироп — 10 мл
Белок яйца
`,
        decoration: 'Украшение: цедра лимона',
      },
      {
        title: 'New York sour',
        iconsPublic: ['glass'],
        iconsBartender: ['shaker'],
        tastes: `Сладкий\nСредняя крепость`,
        contents: 'Бурбон, Сахарный сироп, Лимонный сок, Белок яйца, Красное вино — on top',
        recipe: `Бурбон — 60 мл
Сахарный сироп — 20 мл
Лимонный сок — 25 мл
Белок яйца
Красное вино — on top`,
        decoration: 'Украшение: цедра лимона',
      },
      {
        title: 'Godfather',
        iconsPublic: ['glass'],
        iconsBartender: ['shaker'],
        tastes: `Крепкий`,
        contents: 'Виски, Амаретто',
        recipe: `Виски — 60 мл
Амаретто — 20 мл 
`,
      },
    ],
  },
  {
    categoryName: 'Coffee special',
    drinks: [
      {
        title: 'Cold special',
        iconsPublic: ['glass'],
        iconsBartender: ['method'],
        tastes: `Сладко
Крепкий`,
        contents: 'Кофейный ликёр, Виски',
        recipe: `Кофейный ликёр — 45 мл
Виски — 45 мл`,
      },
      {
        title: 'Coffee negroni',
        iconsPublic: ['glass'],
        iconsBartender: ['method'],
        tastes: `Сладко
Средней крепости
`,
        contents: 'Джин, Кофейный ликёр, Кампари, Cладкий вермут',
        recipe: `Джин — 30 мл
Кофейный ликёр — 30 мл
Кампари — 15 мл
Cладкий вермут — 10 мл
`,
        decoration: 'Украшение: апельсин',
      },
      {
        title: 'Dominicana',
        iconsPublic: ['glass'],
        iconsBartender: ['method'],
        tastes: `Сладко
Средней крепости`,
        contents: 'Ром темный, Кофейный ликёр, Сахарный сироп',
        recipe: `Ром темный — 45 мл
Кофейный ликёр — 45 мл
Сахарный сироп — 5-7 мл
`,
        decoration: 'Украшение: Сливки сверху 20 мл',
      },
      {
        title: 'Espresso martini',
        iconsPublic: ['v-glass'],
        iconsBartender: ['shaker'],
        tastes: `Сладко
Средней крепости`,
        contents: 'Водка / светлый ром / коньяк, Кофейный ликёр, Эспрессо, Сахарный сироп / сироп лемонграсса',
        recipe: `Водка / светлый ром / коньяк — 40 мл
Кофейный ликёр — 15 мл
Эспрессо — 30 мл
Сахарный сироп / сироп лемонграсса — 15 мл`,
        decoration: 'Украшение: зерна кофе',
      },
      {
        title: 'Espresso margarita',
        iconsPublic: ['glass'],
        iconsBartender: ['shaker'],
        tastes: `Сладко
Крепко`,
        contents: 'Текила, Кофейный ликёр, Трипл-сек, Эспрессо',
        recipe: `Текила — 40 мл
Кофейный ликёр — 15 мл
Трипл-сек — 25 мл
Эспрессо — 30 мл
`,
        decoration: 'Украшение: молотый кофе',
      },
    ],
  },
  {
    categoryName: 'Jägermeister special',
    drinks: [
      {
        title: 'Jäger Sour',
        iconsPublic: ['glass'],
        iconsBartender: ['shaker'],
        tastes: `Сладко/кисло/горько
Средняя крепость`,
        contents: 'Егермейстер, Лимонный сок, Сахарный сироп, Апельсиновый сок, Яичный белок',
        recipe: `Егермейстер — 50 мл
Лимонный сок — 13 мл
Сахарный сироп — 13 мл
Апельсиновый сок — 25 мл
Яичный белок — 30 мл`,
        decoration: 'Украшение: апельсин',
      },
      {
        title: 'Grizzly Bear',
        iconsPublic: ['tall-glass'],
        iconsBartender: ['shaker'],
        tastes: `Сладко/горько
Средняя крепость`,
        contents: 'Амаретто, Егермейстер, Кофейный ликёр,\nМолоко',
        recipe: `Амаретто — 30 мл
Егермейстер — 30 мл
Кофейный ликёр — 30 мл
Молоко — 75 мл`,
        decoration: 'Украшение: палочка корицы',
      },
      {
        title: 'Cucumber',
        iconsPublic: ['tall-glass'],
        iconsBartender: ['iced'],
        tastes: `Сладко/горько
Низкая крепость`,
        contents: 'Огурец, Егермейстер, Спрайт / 7UP',
        recipe: `Огурец — 3-4 слойса
Егермейстер — 50–60 мл
Спрайт / 7UP — 150 мл`,
      },
      {
        title: 'Jäger Tonic',
        iconsPublic: ['glass', 'tall-glass'],
        iconsBartender: ['iced'],
        tastes: `Сладко/горько
Низкая крепость
`,
        contents: 'Егермейстер, Тоник',
        recipe: `Егермейстер — 60 мл
Тоник — 120 мл
`,
        decoration: 'Украшение: апельсин',
      },
    ],
  },
  {
    categoryName: 'Коктейли',
    drinks: [
      {
        title: 'Gimlet',
        iconsPublic: ['v-glass'],
        iconsBartender: ['shaker'],
        tastes: `Кисло
Средняя крепость`,
        contents: 'Джин, Сок лайма, Сахарный сироп',
        recipe: `Джин — 60 мл
Сок лайма — 15 мл
Сахарный сироп — 15 мл
`,
        decoration: 'Украшение: цедра лимона',
      },
      {
        title: 'Gin Fizz',
        iconsPublic: ['tall-glass'],
        iconsBartender: ['shaker'],
        tastes: `Кисло
Средняя крепость`,
        contents: 'Джин, Лимонный сок, Сахарный сироп, Газированная вода',
        recipe: `Джин — 45 мл
Лимонный сок — 30 мл
Сахарный сироп — 10 мл
Газированная вода — 80 мл
`,
        decoration: 'Украшение: цедра лимона',
      },
      {
        title: 'Negroni',
        iconsPublic: ['glass'],
        iconsBartender: ['method', 'iced'],
        tastes: `Горький
Крепкий`,
        contents: 'Джин, Сладкий вермут, Кампари',
        recipe: `Джин — 1 часть
Сладкий вермут — 1 часть
Кампари — 1 часть
`,
        decoration: 'Украшение: цедра апельсина',
      },
      {
        title: 'Margarita',
        iconsPublic: ['v-glass'],
        iconsBartender: ['shaker'],
        tastes: `Кисло
Средняя крепость`,
        contents: 'Текила, Трипл-сек, Сок лайма, Сахарный сироп',
        recipe: `Текила — 50 мл
Трипл-сек — 20 мл
Сок лайма — 20 мл
Сахарный сироп — 10 мл
`,
        decoration: 'Украшение: цедра лимона, рим соленый',
      },
      {
        title: 'Clover club',
        iconsPublic: ['v-glass'],
        iconsBartender: ['shaker'],
        tastes: `Сладко, Средняя крепость`,
        contents: 'Джин, Малиновый сироп, Лимонный сок, Яичный белок',
        recipe: `Джин — 45 мл
Малиновый сироп — 15 мл
Лимонный сок — 20 мл
Яичный белок — 1/2
`,
        decoration: 'Украшение: малина',
      },
      {
        title: 'Negroni Sbagliato',
        iconsPublic: ['glass', 'champ-glass'],
        iconsBartender: ['method', 'iced'],
        tastes: `Горький
Средняя крепость`,
        contents: 'Сладкий вермут, Кампари, Просекко',
        recipe: `Сладкий вермут — 30 мл
Кампари — 30 мл
Просекко — 30 мл
`,
        decoration: 'Украшение: цедра апельсина',
      },
      {
        title: 'Americano',
        iconsPublic: ['glass'],
        iconsBartender: ['iced'],
        tastes: `Горький
Крепкий`,
        contents: 'Кампари, Cладкий вермут, Газированная вода, Апельсиновый сок',
        recipe: `Кампари — 50 мл
Cладкий вермут — 50 мл
Газированная вода — 30 мл
Апельсиновый сок — 30 мл
`,
        decoration: 'Украшение: цедра лимона, рим соленый',
      },
      {
        title: 'French 75',
        iconsPublic: ['champ-glass'],
        iconsBartender: ['shaker'],
        tastes: `Сладкий
Средней крепости`,
        contents: 'Джин или коньяк, Просекко, Сахарный сироп, Лимонный сок',
        recipe: `Джин или коньяк — 30 мл
Просекко — 60 мл
Сахарный сироп — 15 мл
Лимонный сок — 15 мл
`,
        decoration: 'Украшение: малина',
      },
      {
        title: 'Bellini',
        iconsPublic: ['champ-glass'],
        iconsBartender: ['iced'],
        tastes: `Сладкий
Средней крепости
`,
        contents: 'Просекко, Персиковое пюре',
        recipe: `Просекко — 2 части
Персиковое пюре — 1 часть
`,
        decoration: 'Украшение: цедра апельсина',
      },
      {
        title: 'Mimosa',
        iconsPublic: ['champ-glass'],
        iconsBartender: ['iced'],
        tastes: `Сладкий
Средняя крепость`,
        contents: 'Просекко, Апельсиновый сок',
        recipe: `Просекко — 1 часть
Апельсиновый сок — 1 часть
`,
      },
      {
        title: 'Paloma',
        iconsPublic: ['tall-glass'],
        iconsBartender: ['iced'],
        tastes: `Сладко/кисло
Средняя крепость`,
        contents: 'Текила, Сок лайма, Сок грейпфрута, Сахарный сироп, Газированная вода',
        recipe: `Текила — 60 мл
Сок лайма — 15 мл
Сок грейпфрута — 60 мл
Сахарный сироп — 15 мл
Газированная вода — 60 мл
`,
        decoration: 'Украшение: грейпфрут',
      },
      {
        title: 'Cuba Libre',
        iconsPublic: ['glass', 'tall-glass'],
        iconsBartender: ['iced'],
        tastes: `Сладко
Средняя крепость
`,
        contents: 'Ром, Кола, Сок лайма',
        recipe: `Ром — 50 мл
Кола — 120 мл
Сок лайма — 10 мл`,
        decoration: 'Украшение: лайм',
      },
      {
        title: 'Mother’s milk',
        iconsPublic: ['v-glass'],
        iconsBartender: ['shaker'],
        tastes: `Травянисто
Крепко`,
        contents: 'Джин, Сливки, Сахарный сироп',
        recipe: `Джин — 45 мл
Сливки — 30 мл
Сахарный сироп — 10 мл
`,
        decoration: 'Украшение: мускатный орех',
      },
      {
        title: 'Beyond the sea',
        iconsPublic: ['v-glass'],
        iconsBartender: ['shaker'],
        tastes: `Сладко/кисло
Средняя крепость`,
        contents: 'Джин, Сок лайма, Сахарный сироп, Огурец, Красное вино — on top',
        recipe: `Джин — 60 мл
Сок лайма — 30 мл
Сахарный сироп — 30 мл
Огурец — 1 долька
Красное вино — on top
`,
      },
      {
        title: 'Bee’s Knees',
        iconsPublic: ['v-glass'],
        iconsBartender: ['shaker'],
        tastes: `Кисло/сладко
Средняя крепость`,
        contents: 'Джин, Лимонный сок, Медовый сироп',
        recipe: `Джин — 60 мл
Лимонный сок — 22 мл
Медовый сироп — 15 мл`,
        decoration: 'Украшение: цедра лимона',
      },
      {
        title: 'Brown Derby',
        iconsPublic: ['v-glass'],
        iconsBartender: ['shaker'],
        tastes: `Сладко
Средняя крепость`,
        contents: 'Бурбон, Грейпфрутовый сок, Медовый сироп',
        recipe: `Бурбон — 60 мл
Грейпфрутовый сок — 30 мл
Медовый сироп — 15 мл
`,
        decoration: 'Украшение: Цедра грейпфрута',
      },
      {
        title: 'Basil smash',
        iconsPublic: ['glass'],
        iconsBartender: ['shaker'],
        tastes: `Кисло/Сладко
Средняя крепость`,
        contents: 'Джин, Сахарный сироп, Лимонный сок, Базилик зелёный',
        recipe: `Джин — 60 мл
Сахарный сироп — 20 мл
Лимонный сок — 30 мл
Базилик зелёный — 8-10 листиков`,
        decoration: 'Украшение: Листики базилика',
      },
    ],
  },
  {
    categoryName: 'Baileys special',
    drinks: [
      {
        title: `Baileys White\nRussian`,
        iconsPublic: ['glass'],
        iconsBartender: ['method'],
        tastes: `Сладко
Средняя крепость`,
        contents: 'Айриш крим, Кофейный ликёр, Ром со специями, Эспрессо',
        recipe: `Айриш крим — 30 мл
Кофейный ликёр — 30 мл
Ром со специями — 30 мл
Эспрессо — 30 мл`,
        decoration: 'Украшение: палочка корицы',
      },
      {
        title: `Mint Baileys\nMartini`,
        iconsPublic: ['v-glass'],
        iconsBartender: ['shaker'],
        tastes: `Сладкий
Крепкий`,
        contents: 'Айриш крим, Водка (или ванильная водка), Мятный ликёр, Взбитые сливки для украшения',
        recipe: `Айриш крим — 40 мл
Водка (или ванильная водка) — 40 мл
Мятный ликёр — 30 мл (либо 20 мл сиропа)
Взбитые сливки для украшения`,
        decoration: 'Украшение: сливки и тертый шоколад',
      },
    ],
  },
];
