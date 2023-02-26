// question 1
function InstagramPost(authorHandle, content, imagePost, numberOfVIews, numberOfLikes) {
    this.authorHandle = authorHandle;
    this.content = content;
    this.imagePost = imagePost;
    this.numberOfVIews = numberOfVIews;
    this.numberOfLikes = numberOfLikes;
}


//question 2
let instagramPost1 = new InstagramPost("_cheeoomma_", "content1", "image1", 200, 250)
let instagramPost2 = new InstagramPost("_na_ali_", "content2", "image2", 397, 300)


//question 3a
function createPerson(name, age, location){
    return {
        name,
        age,
        location
    }
}
const person1 = createPerson("Musa Dawodu", 19, "Lekki, Lagos State")


//question 3b
 function createJambScore(eng, govt, lit, crk) {
    return{
        eng,
        govt,
        lit,
        crk
    }
 }
 const person1Score = createJambScore(70, 85, 82, 94)
 //adding the person1Score object as a property to the person1 object
 person1["jambScore"] = person1Score;
 console.log(person1)


 //question 5
 const presidentialCandidates = {
    AAC: 'Omoyele Sowore',
    ACCORD: 'Christopher Imumolen',
    APC: 'Bola Ahmed Tinubu',
    LP: 'Peter Obi',
    NNPP: 'Rabiu Kwankwaso',
    PDP: 'Atiku Abubakar',
 }
 
 for (let key in presidentialCandidates) {
    console.log(presidentialCandidates[key] + "is the presidential candidate of " + key)
 }