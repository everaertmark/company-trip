Bedrijfsuitje events - Mark Everaert - 0902764- MT3A

Concept:

Als organisatie/bedrijf je eigen evenementen kunnen koppelen aan jou bedrijfsuitje. Dit wordt opgehaald via meerdere event API’s. Je kunt als organisatie/bedrijf dan vervolgens je eigen lijst aanmaken met evenementen die wellicht in de interesse vallen van de personeelsleden. De personeelsleden kunnen vervolgens een score geven van 1/10 aan elk evenement. Het evenement met de hoogste resultaat wordt gekozen als bedrijfsuitje.

///////////////////////////////////////////////////////////////////////////////////////////////

Binnen deze applicatie krijg je een overzicht van allerlei evenementen bij jou in de buurt. Zo heb 
je de mogelijkheid om verschillende steden te bekijken.

Ook is er de mogelijkheid om te zoeken op de titel van het evenement.

Sommige codestukken zijn niet compleet werkend, maar hopelijk wel duidelijk als code-materiaal.
Dit zijn:
	- De mogelijkheid tot het toevoegen van personeelsleden was bijna werkend, echter helaas niet volledig gelukt. 
	- De mogelijkheid om te zoeken naar ��n los evenement (de api vereist altijd een ID als paramater, wat vrij nadelig werkt)
	- De mogelijkheid om evenementen te zoeken op categorie (ik kreeg een volledige json lijst terug, maar kon dit helaas niet
	  omschakelen naar losstaande event models)
	- De mogelijkheid om als personeelslid een voorkeur te klikken


Routes:
De app heeft een aantal routes, namelijk:
/overview   	-haalt alle events op
/amsterdam	-haalt amsterdam events op
/rotterdam	-haalt rotterdam events op
/antwerpen	-haalt antwerpen events op
/brussel	-haalt brussel events op
/settings	-rendert een formulier waarmee je kunt zoeken naar een specifiek evenement door middel van de titel

Browsertest: https://www.youtube.com/watch?v=uXoMkJ_9rVs

