# Avoin Matematiikka 1

Avoin Matematiikka on html-versio [Vapaasta Matikasta] (https://github.com/linjaaho/oppikirjamaraton-maa1). Tarkoituksena
on ainakin tässä vaiheessa päivittää sisältö vastaamaan Vapaata Matikkaa, joten sisällön suhteen virheet kannattaa ilmoittaa
Vapaan Matikan repositoryyn.

Tällä hetkellä Avointa Matematiikkaa voi lukea osoitteessa [kaikkonendesign.fi/maa1] (http://www.kaikkonendesign.fi/maa1).

Jos muille kursseille luodaan avoimen lisenssin sisältöä ja lukijakuntaa html-versiolle on, oman domainin alle siirtymistä
voidaan miettiä.

## Miten voin auttaa?

Koko Vapaata Matikkaa ei ole vielä käännetty Avoimeen Matematiikkaan, joten jäljellä olevissa käännöstöissä apu on tervetullutta!
Helpoiten kehitysympäristön saat pystyyn, jos käytät Linuxia.

Tällä hetkellä sivusto koostuu [HAML] (http://www.haml.info) tiedostoista, joissa on sekoitettuna HAMLia, [Markdownia] (http://daringfireball.net/projects/markdown/)
ja LaTeXia.

Käännöstyön olen itse hoitanut seuraavasti:

1. Käännä luku Vapaasta Matikasta Markdowniin [Pandocilla] (http://johnmacfarlane.net/pandoc/). Matemaattiset kaavat jäävät automaattisesti LaTeXiin.
2. Luo uusi \_luku*n*.html.haml tiedosto luvulle, liitä käännetty markdown -sisältö tiedostoon (samalla mallilla kuin edellisissä luvuissa)
3. Luo uusi luku*n*.html.haml tiedosto, jossa viittaat partialilla äsken luotuun tiedostoon (katso mallia edellisistä luvuista)
4. Luo haml-koodi laatikoille (otsikko, esimerkit, säännöt, sivulaatikot) manuaalisesti.
5. Luo haml-koodi harjoituksille (katso malli edellisistä luvuista).
6. Tarkista, että kaikki näyttää selaimessa ok:lta. Jos markdown -formaatti rikkoo LaTeX -matematiikan, siirrä matematiikka esim. omaksi paragraphiksi hamlilla
7. Luo linkki uuteen lukuun etusivulle. Edellinen ja seuraava linkit -manuaalisesti kuntoon.

Jotta näet tulokset selaimessa, sinun täytyy asentaa [MiddleMan -serveri] (http://middlemanapp.com/) joka kääntää
hamlit sun muut html:ksi, jota voi sitten katsella selaimella. Repossa on mukana on mukana [Ruby Version Managerin]
(https://rvm.io/) .rvmrc -tiedosto, jota voi käyttää.

## Ota yhteyttä
Tommi Kaikkonen
[tommi@kaikkonendesign.fi] (mailto:tommi@kaikkonendesign.fi)
[Twitter] (https://twitter.com/tommikaikkonen)

