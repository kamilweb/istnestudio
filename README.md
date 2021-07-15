Stronka - co i jak:
Strona główna jest w pliku index.html
Polityka prywatności - polityka...html
Obrazki w img - desktop, mobile oraz common osobno, dla mobile zdjęcia są mniejsze i lżejsze.

Gotowa do podgrania na serwer paczka znajduje się w katalogu dist. W tym katalogu pliki są zminifikowane i zoptymalizowane.

Aby wprowadzać zmiany i uruchomić stronkę, należy wykonać następujące czynności:
1. uruchomić terminal i otworzyć lokalizację pliku tzn. w terminalu musisz być w katalogu w którym są pliki strony,
2. nastepnie instalujesz skrypty z package.json - dodaje się node_modules. robisz to wpisując w terminal "npm i"
3. aby uruchomić podgląd zmian na żywo w terminalu wpisujesz npm run start - uruchamia się wtedy podgląd lokalny i możesz w przeglądarce śledzić zmiany, które wprowadzasz w kodzie,
4. zmiany wprowadzasz we wszystkich plikach poza dist - w katalogu dist jest budowana na bieżąco paczka produkcyjna,
5. zmiany są zapisane w folderze dist i możesz go umieścić na serwerze.
6. możesz również uruchomić komendę npm run build, która zbuduje Ci katalog dist, jednakże używając tej komendy warto usunąć wcześniej dist, ponieważ przy użyciu npm run start, a potem npm run build pliki w dist dublują się.
7. jeśli cała procedura jest dla Ciebie uciążliwa to w pliku package.json trzeba wyłączyć minifikację plików dodając aktualizując komendę "build" o --no-minify ->
"build": "parcel build index.html --no-minify --public-url ./",
jak to wyłączysz, to będziesz mógł działać bezpośrednio w katalogu dist. wtedy działasz na gotowych plikach, ale musisz wziąć pod uwagę, że wtedy pliki nie są minifikowane
8. jakby były jakieś problemy to pisz
