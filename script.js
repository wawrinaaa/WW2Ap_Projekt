function table(tablenr)
{
    switch(tablenr)
    {
        case 1:
            {
                document.getElementById("brick1").innerHTML='<table id="table1"> <tr><th>Roczna liczba turystów</th> <th>1000</th></tr> <tr><th>Najpopularniejszy miesiąc</th> <th>Sierpień</th></tr> <tr><th>Region</th> <th>Południe</th></tr> <tr><th>Populacja</th> <th>2000 osób</th></tr> <tr style="cursor: pointer;" onclick="fuggoback(1);"><th>WRÓĆ</th><th><i class="fas fa-long-arrow-alt-left"></i></th></tr> </table>'
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
    }
}