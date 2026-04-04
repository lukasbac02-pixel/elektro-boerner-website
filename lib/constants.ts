export const CONTACT = {
  company: "Elektro Börner GmbH",
  owner: "Stefan Börner",
  address: {
    street: "Bahnhofstrasse 4",
    zip: "8777",
    city: "Betschwanden",
    full: "Bahnhofstrasse 4, 8777 Betschwanden",
  },
  phone: [
    { display: "055 550 32 65", href: "tel:+41555503265" },
    { display: "079 904 69 43", href: "tel:+41799046943" },
  ],
  email: "elektro_boerner@bluewin.ch",
  website: "https://www.elektro-börner.ch",
  geo: {
    latitude: 46.945946,
    longitude: 9.025424,
  },
  map: {
    embedUrl:
      "https://www.openstreetmap.org/export/embed.html?bbox=9.024424%2C46.945446%2C9.026424%2C46.946446&layer=mapnik&marker=46.945946%2C9.025424",
    linkUrl:
      "https://www.openstreetmap.org/#map=19/46.945946/9.025424",
  },
  areaServed: [
    "Betschwanden",
    "Glarus",
    "Näfels",
    "Schwanden",
    "Linthal",
    "Netstal",
    "Oberurnen",
    "Mollis",
  ],
} as const;
