export class UserItemModel {
  id:number = Date.now() + Math.round(Math.random()*1000);
  nom:String ="";
  prenom :String="";
  age:number=0;
  genre:String = "femme" //homme ou hemme

  constructor(nom: String , prenom: String , age: number , genre: String) {
    this.nom=nom?nom:"";
    this.prenom=prenom?prenom:"";
    this.age = age?age:0;
    this.genre=genre
  }

}
