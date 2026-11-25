// „Neues“: Ankündigungen auf der Startseite – eigene Datei, damit auch der Push-Versand
// (scripts/send-reminders.mjs) neue Meldungen erkennt und alle per Mitteilung informiert.
// Neuen Eintrag oben einfügen → die Kachel zeigt immer den neuesten. Jede Meldung braucht eine
// neue, eindeutige id – nur neue ids lösen eine Push-Mitteilung aus.
// Bitte keine Browser-APIs hier verwenden.
export const NEWS = [
  {
    id: '2026-11-25-neu',
    date: '2026-11-25',
    label: '✨ Neue Funktionen',
    items: [
      { icon: '🎤', title: 'Sprachnachrichten gedrückt halten', text: 'Im Privatchat kannst du den Mikrofon-Knopf jetzt gedrückt halten, um eine Sprachnachricht aufzunehmen. Loslassen sendet sie, nach links wischen bricht ab. Wischst du nach oben, rastet die Aufnahme ein und du kannst freihändig weitersprechen.' },
    ],
  },
  {
    id: '2026-11-25-mic',
    date: '2026-11-25',
    label: '❗ Wichtiges',
    items: [
      { icon: '🎤', title: 'Mikrofon auf iPhone & iPad dauerhaft erlauben', text: 'Damit du beim Aufnehmen von Sprachnachrichten nicht nach jedem App-Start erneut nach dem Mikrofon gefragt wirst, stell es auf deinem iPhone oder iPad in den Einstellungen auf „Erlauben“: Einstellungen › Apps › Safari › Einstellungen für Websites › Mikrofon › Erlauben. Bei älteren iOS- und iPadOS-Versionen findest du Safari direkt in der Liste der Einstellungen.' },
    ],
  },
  {
    id: '2026-11-25-fixes-3',
    date: '2026-11-25',
    label: '🛠️ Bug-Fixes',
    items: [
      { icon: '💬', title: 'Privatchats öffnen ganz unten', text: 'Beim Öffnen eines Privatchats siehst du jetzt immer sofort die neueste Nachricht. Vorher landete die Ansicht manchmal mittendrin, weil Sticker und Bilder erst etwas später geladen wurden.' },
      { icon: '🗑️', title: 'Kein versehentliches Abhaken', text: 'Auf der Startseite lassen sich Tonnen nicht mehr als rausgestellt markieren, weil man den Knopf zu leicht aus Versehen getroffen hat. Abhaken geht jetzt im Bereich Müll.', act: 'tab', v: 'trash', btn: 'Zum Abholplan' },
      { icon: '🌟', title: 'Sticker in Kommentaren', text: 'Sticker in Kommentaren werden jetzt platzsparend gespeichert. Vorher konnte das Speichern bei Beiträgen mit vielen Sticker-Kommentaren fehlschlagen.' },
      { icon: '👆', title: 'Sticker gedrückt halten', text: 'Langes Drücken auf einen Sticker öffnet jetzt zuverlässig das Menü der App statt des Bild-Menüs vom iPhone.' },
    ],
  },
  {
    id: '2026-11-24-neu',
    date: '2026-11-24',
    label: '✨ Neue Funktionen',
    items: [
      { icon: '✅', title: 'Erledigte Tonnen im Überblick', text: 'Unter Müll gibt es jetzt den Reiter „Erledigt“. Dort siehst du alle Tonnen, die bereits rausgestellt wurden: wann, von wem und wer es insgesamt wie oft gemacht hat.', act: 'tab', v: 'trash', btn: 'Zum Abholplan' },
    ],
  },
  {
    id: '2026-11-23-sticker-pin',
    date: '2026-11-23',
    label: '✨ Neue Funktionen',
    items: [
      { icon: '🌟', title: 'Eigene Sticker im Privatchat', text: 'Mach aus deinen Fotos eigene Sticker: als Kreis, Quadrat oder Herz zuschneiden oder frei mit dem Finger ausschneiden, auf Wunsch mit weißem Rand. Tippe im Privatchat auf das Sticker-Symbol, um sie zu erstellen und zu senden. Sticker, die du bekommst, kannst du gedrückt halten und speichern.' },
      { icon: '📌', title: 'Chat anpinnen', text: 'In der Nachrichtenübersicht kannst du einen Privatchat mit der Stecknadel anpinnen. Er steht dann immer ganz oben.' },
      { icon: '⌨️', title: 'Sticker aus der Tastatur', text: 'Sticker und Bilder aus deiner Tastatur kannst du jetzt direkt im Privatchat versenden. Einfach im Eingabefeld auswählen.' },
      { icon: '💬', title: 'Kommentare antworten & reagieren', text: 'Auf Kommentare kannst du jetzt direkt antworten, sie mit ❤️ liken oder mit einem Emoji darauf reagieren.', act: 'tab', v: 'board', btn: 'Zum Social Hub' },
      { icon: '🎄', title: 'Farbschema „Weihnachten“', text: 'Festliches Farbschema in Weihnachtsrot, Tannengrün und warmem Gold, nur bis zum 26. Dezember. 💡 Tipp: Am schönsten wirkt es, wenn die App auf „Dunkel“ eingestellt ist.', act: 'tab', v: 'house', btn: 'Farbschema wählen' },
      { icon: '❄️', title: 'Es schneit', text: 'In der ganzen App rieselt jetzt bis zum 26. Dezember leise Schnee.' },
      { icon: '🎅', title: 'Weihnachtsmützen', text: 'Passend zum Winter trägt jedes Profilbild bis zum 26. Dezember eine kleine Weihnachtsmütze.', act: 'tab', v: 'house', btn: 'Mitbewohner:innen ansehen' },
      { icon: '🌴', title: 'Farbschema „GTA VI“', text: 'Zum Release von GTA VI gibt es exklusiv ein Farbschema in Pink und Lila mit einem dezenten Hauch Orange. Es ist nur bis zum 12. Dezember dabei und verschwindet danach wieder. 💡 Tipp: Am schönsten wirkt es, wenn die App auf „Dunkel“ eingestellt ist.', act: 'tab', v: 'house', btn: 'Farbschema wählen' },
    ],
  },
  {
    id: '2026-11-23-pin',
    date: '2026-11-23',
    label: '❗ Wichtiges',
    items: [
      { icon: '🔒', title: 'Schütze dein Profil mit einer PIN', text: 'Ab sofort kannst du dein Profil mit einer persönlichen PIN aus 4 bis 8 Ziffern schützen, die du dir selbst aussuchst. Dann kann niemand mehr aus Versehen in dein Profil wechseln. Du findest die Einstellung unter „Profil wechseln“. Die Einstellung ist freiwillig, aber sie schützt deine Privatsphäre, zum Beispiel deine Privatchats.', act: 'switch-user', btn: 'PIN festlegen' },
    ],
  },
  {
    id: '2026-11-23-fixes',
    date: '2026-11-23',
    label: '🛠️ Bug-Fixes',
    items: [
      { icon: '🧭', title: 'Navigationsleiste auf iPad & PC', text: 'Auf iPads, Tablets und PCs sitzt die Navigationsleiste jetzt senkrecht am rechten Rand, mittig und ohne etwas zu verdecken. Auf Handys bleibt sie unten.' },
      { icon: '🫧', title: 'Sanfter Übergang mit Tastatur', text: 'Wenn die Tastatur hochfährt, gleitet das Fenster jetzt weich nach oben, statt aufzuploppen.' },
      { icon: '👤', title: 'Profil öffnen', text: 'Das Fenster „Mein Profil“ verschiebt sich beim ersten Öffnen nicht mehr.' },
      { icon: '👆', title: 'Scrollen in „Mein Profil“', text: 'In den Profileinstellungen kann man jetzt überall scrollen, auch wenn der Finger auf der Emoji- oder Farbauswahl aufsetzt.' },
      { icon: '🧭', title: 'Fenster & Navigationsleiste', text: 'Fenster überlappen die Navigationsleiste nicht mehr. Sie bleibt darunter immer frei sichtbar.' },
      { icon: '⌨️', title: 'Fenster beim Tippen', text: 'Beim Kommentieren rutscht das Fenster auf dem iPhone nicht mehr ganz nach oben, sondern bleibt direkt über der Tastatur.' },
      { icon: '💬', title: 'Kommentare linksbündig', text: 'Der neueste Kommentar unter einem Beitrag steht wieder links statt mittig.' },
    ],
  },
  {
    id: '2026-11-15-fixes-5',
    date: '2026-11-15',
    label: '🛠️ Bug-Fixes',
    items: [
      { icon: '↩️', title: 'Zurück-Taste', text: 'Auf Android schließen Zurück-Taste und Zurück-Geste jetzt nur das offene Fenster statt die ganze App.' },
      { icon: '🔁', title: 'Monatliche Aufgaben', text: 'Aufgaben am 29., 30. oder 31. springen nicht mehr in den Folgemonat. Im Februar ist dann einfach der letzte Tag dran.' },
      { icon: '🧭', title: 'Navigationsleiste', text: 'Bleibt auf allen Geräten beim Scrollen bis ans Seitenende fest an ihrem Platz.' },
      { icon: '✂️', title: 'Nichts mehr abgeschnitten', text: '„Alle / wer Zeit hat“ bei neuen Aufgaben und „überfällig“ bei „Wer hat was zu tun?“ sind wieder ganz lesbar.' },
      { icon: '💬', title: 'Kommentare stabiler', text: 'Ältere Einträge ohne Uhrzeit bringen das Kommentarfenster nicht mehr zum Absturz.' },
    ],
  },
  {
    id: '2026-11-13-everyone',
    date: '2026-11-13',
    label: '✨ Neue Funktionen',
    items: [
      { icon: '📣', title: '@everyone', text: 'Markiere in Beiträgen und Kommentaren mit @everyone alle auf einmal. So weiß jede:r, dass alle gemeint sind.', act: 'compose', v: 'post', btn: 'Beitrag schreiben' },
      { icon: '✍️', title: 'Schnell gefunden', text: 'Einfach „@“ tippen, dann steht @everyone ganz oben in den Vorschlägen (auch bei „@alle“).' },
      { icon: '🔔', title: 'Alle bekommen Bescheid', text: 'Bei @everyone geht an alle im Haus eine Mitteilung mit dem Anfang des Beitrags.' },
      { icon: '🐞', title: 'Bugs melden', text: 'Etwas funktioniert nicht? Melde es direkt auf der Startseite unter „Wünsche & Anregungen“.', act: 'fb-new', v: 'bug', btn: 'Bug melden' },
      { icon: '💡', title: 'Wünsche äußern', text: 'Dir fehlt eine Funktion? Schreib sie auf, sie landet direkt bei Nico zum Umsetzen.', act: 'fb-new', v: 'wish', btn: 'Wunsch äußern' },
      { icon: '🔒', title: 'Nur für dich sichtbar', text: 'Deine Meldungen siehst nur du. Du bekommst Bescheid, sobald sie in Arbeit oder erledigt sind.', act: 'fb-list', btn: 'Meine Meldungen' },
      { icon: '🔒', title: 'Dein Profil gehört dir', text: 'Name, Bild, Farbe und Stockwerk kann jetzt nur noch jede:r im eigenen Profil ändern.', act: 'profile', btn: 'Mein Profil' },
      { icon: '👤', title: 'Profile ansehen', text: 'Tippe unter „Haus“ auf eine Person: Profilbild, Stockwerk und Online-Status. Nachricht und Aufgabe gehen mit einem Tipp.', act: 'tab', v: 'house', btn: 'Zu den Mitbewohner:innen' },
      { icon: '🏷️', title: 'Spitznamen bleiben', text: 'Eigene Spitznamen für andere kannst du weiterhin im jeweiligen Profil vergeben. Nur du siehst sie.' },
      { icon: '💬', title: 'Privatnachrichten', text: 'Schreibt euch privat mit Text oder Sprachnachricht. Nur ihr beide seht den Chat.', act: 'dms', btn: 'Nachrichten öffnen' },
      { icon: '📋', title: 'Aufgaben zuteilen', text: 'Im Chat mit ☑️ eine Aufgabe für dein Gegenüber anlegen. Sie kann direkt dort abgehakt werden.' },
      { icon: '🏠', title: 'Wer wohnt wo?', text: 'Unter „Haus“ seht ihr alle nach Stockwerk, vom 1. OG bis in den Keller.', act: 'tab', v: 'house', btn: 'Ansehen' },
    ],
  },
  {
    id: '2026-11-13-fixes-4',
    date: '2026-11-13',
    label: '🛠️ Bug-Fixes',
    items: [
      { icon: '🫧', title: 'Fenster als Blase', text: 'Beiträge, Aufgaben, Kommentare & Co. öffnen sich jetzt als schwebende Blase.' },
      { icon: '📱', title: 'Kein schwarzer Balken', text: 'Nach dem Tippen oder Markieren bleibt unten am iPhone kein schwarzer Streifen mehr stehen.' },
      { icon: '🖥️', title: 'Auf allen Geräten', text: 'Gleiches Aussehen auf Handy, Tablet und PC, mit sanftem Ein- und Ausblenden.' },
      { icon: '🖼️', title: 'Kein Flackern mehr', text: 'Profilbilder blitzen beim Schieben der Regler auf keinem Gerät mehr gelb auf.' },
      { icon: '🔒', title: 'Private Aufgaben', text: 'Im Privatchat zugeteilte Aufgaben sehen nur noch ihr beide, genauso wie die Mitteilungen dazu.' },
      { icon: '🏷️', title: 'Erkennbar', text: 'Private Aufgaben tragen in der Liste ein „🔒 Privat“. Beim Anlegen lässt sich das auch selbst einschalten.', act: 'tab', v: 'tasks', btn: 'Zu den Aufgaben' },
      { icon: '🫳', title: 'Gedrückt halten', text: 'Nachricht im Chat gedrückt halten öffnet ein kompaktes Menü: reagieren, antworten, kopieren, löschen.' },
      { icon: '↪️', title: 'Zur zitierten Nachricht', text: 'Eine Antwort antippen springt direkt zur Nachricht, auf die geantwortet wurde.' },
      { icon: '🏷️', title: 'Spitznamen', text: 'Im Profil einer Person einen eigenen Spitznamen speichern. Nur du siehst ihn.', act: 'tab', v: 'house', btn: 'Zu den Mitbewohner:innen' },
      { icon: '⏩', title: 'Sprachnachrichten spulen', text: 'Auf der Tonspur tippen oder mit dem Finger ziehen, vor und zurück, wie du willst.' },
      { icon: '↩️', title: 'Antworten per Wischen', text: 'Im Privatchat eine Nachricht nach rechts wischen, um direkt darauf zu antworten.' },
      { icon: '😍', title: 'Reaktionen & Medien im Chat', text: 'Nachricht antippen und mit Emoji reagieren. Außerdem könnt ihr euch jetzt Fotos und Videos schicken.', act: 'dms', btn: 'Nachrichten öffnen' },
    ],
  },
];
