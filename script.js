function table(tablenr)
{
    switch(tablenr)
    {
        case 1:
            {
                document.getElementById("brick1").innerHTML='<table id="table1"> <tr><th>Roczna liczba turystów</th> <th>1000</th></tr> <tr><th>Najpopularniejszy miesiąc</th> <th>Sierpień</th></tr> <tr><th>Region</th> <th>Południe</th></tr> <tr><th>Populacja</th> <th>2000 osób</th></tr> <tr style="cursor: pointer;" onclick="fuggoback(1);"><th>WRÓĆ</th><th><i class="fas fa-long-arrow-alt-left"></i></th></tr> </table>'
                break;
            }
        case 2:
            {
                document.getElementById("brick2").innerHTML='<ol style="list-style-type: upper-roman;"><li>Górzysta kraina położona w północno-zachodniej części Grecji</li><li>Graniczy z regionami: Macedonia Zachodnia, Grecja Zachodnia, Grecja Środkowa i Tesalia</li><li>Po upadku Konstantynopola w czasie czwartej krucjaty (1204) Epir znalazł się pod władzą krzyżowców</li><li>Pod koniec XV wieku cały region został ponownie podbity przez Imperium Osmańskie</li><li>Imperium Osmańskie rządziło Epirem przez następne 400 lat</li><li style="cursor: pointer;" onclick="fuggoback(2);">WRÓĆ <i class="fas fa-long-arrow-alt-left"></i></li></ol>'
                break;
            }
        case 3:
            {
                document.getElementById("brick3").innerHTML='<ul style="list-style-type: square;"><li>Ponda da Piedade, po Portugalsku znaczy "Przylądek Miłosierdzia"</li><li>Najwyższe skały osiągają aż 20 metrów</li><li>Przez wielu uważana zas najpiękniejszą plażę świata</li><li>Zlokalizowana w turystycznym regionie Algarve plaża często odwiedzana jest przez gości z zagranicy, w tym przez coraz liczniejszych przybyszów z Polski</li><li>Łodzią można zwiedzić kilka grot w Ponta da Piedade</li><li style="cursor: pointer;" onclick="fuggoback(3);">WRÓĆ <i class="fas fa-long-arrow-alt-left"></i></li></ul>'
                break;
            }
    }
}

function fuggoback(nr)
{
    switch(nr)
    {
        case 1:
            {
                document.getElementById("brick1").innerHTML='<figure onclick="table(1);"><img src="img/1.png" alt="Zdjęcie Wegen w Szwajcarii"><figcaption>Wegen, Szwajcaria</figcaption></figure>'
                break;
            }
        case 2:
            {
                document.getElementById("brick2").innerHTML='<figure onclick="table(2);"><img src="img/3.png" alt="Zdjęcie Eprius w Grecji"><figcaption>Eprius, Grecja</figcaption></figure>'
                break;
            }
        case 3:
            {
                document.getElementById("brick3").innerHTML='<figure onclick="table(3);"><img src="img/5.png" alt="Zdjęcie Ponta da Piedade z Portugalii"><figcaption>Ponta da Piedade, Portugalia</figcaption></figure>'
                break;
            }
    }
}