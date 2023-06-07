# HexaPawn játék megvalósítása 

A Hexapwn játékot  egy 3x3-as sakktáblán játszák, ahol minden oldalon 3 gyalog  található. A cél az, hogy eljuttassunk a saját gyalogunkat a tábla másik oldalára, vagy megakadályozzuk az ellenfelet abban, hogy lépjen. A gyalog a sakkban megszokott módon léphet, előre egyet, illetve oldalirányban tudja ütni az ellenség bábuját. 

A játék alkalmas arra, hogy szemléltessünk vele  egy mesterséges intelligencia tanulási technikát.
A mesterséges intelligencia működésének szimulációját nem csak számítógéppel lehet megvalósítani, hanem akár gyufásdobozokkal is, ahogy az az alábbi videóból is kiderül: [Az itt bemutatott stratégiával tanul a gép.](https://www.youtube.com/watch?v=1xsY9fPAayw)
A tanulási folyamat lényege, hogy a gép minden játék után okul a hibáiból, és elveti azokat a lépéseket, melyek vereséghez vezettek. Így sok játék után egyre nehezebb megverni, egyre többször nyer. 

Martin Gardner először 1962 márciusában publikálta ezt a játékot a Matematikai Játékok rovatában, majd később a "The Unexpected Hanging" című könyvében is szerepeltette.



 [Az itt bemutatott stratégiával tanul a gép.](https://www.youtube.com/watch?v=1xsY9fPAayw)

Az itt kipróbálható játékban fehér kezd (a játékos), majd a gép automatikusan választ egyet a számára lehetséges lépések közül. 
A gép minden páros lépésben következik, és a játék lehetséges állásait mutatják a játéktér mellett lévő "gyufásdobozok". Az első oszlopban nyomon követhetjük a gép tanulási folyamatát, míg a második oszlopban már a mindig nyerő "okos" gép stratégiáját tanulmányozhatjuk. 


 [A játszható játék: ](https://csefikatalin.github.io/hexaPawn/)

![A játék képe](https://github.com/csefikatalin/hexaPawn/blob/master/kepek/hexapawn.PNG "Hexapawn játék - öntanuló automata")
