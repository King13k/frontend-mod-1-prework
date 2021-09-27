/*
In the space below, add to the existing skeleton of a Tweet class.

- A tweet should have a (dynamic) author, content, timeStamp, numberOfLikes, and comments.
- A tweet should be able to increment the numberOfLikes and add to the list of comments.

Create several instances of your Tweet and log them to the console. Make sure the
tweet object instances _behave_ as expected.
*/

class Tweet {
  constructor(author, content) {
    var date = Date(Date.now())

    this.author = author
    this.content = content
    this.timeStamp = date.toString()
    this.numberOfLikes = 0
    this.comments = []
  }

   incrementNumberOfLikes() {
     this.numberOfLikes++
   }

   addComment(comment) {
     this.comments.push(comment)
   }
}

var firstTweet = new Tweet("James Smith","Mondays are great!")
firstTweet.incrementNumberOfLikes()
firstTweet.addComment("They are great")

var anotherTweet = new Tweet("Jane Doe","Mondays are the worst!")
anotherTweet.addComment("whatever")

console.log(firstTweet);
console.log(anotherTweet);
