function solution() {
  class Post {
    constructor(title, content) {
      this.title = title;
      this.content = content;
    }

    toString() {
      return `Post: ${this.title}\nContent: ${this.content}`;
    }
  }

  class SocialMediaPost extends Post {
    constructor(title, content, likes, dislikes) {
      super(title, content);
      this.likes = likes;
      this.dislikes = dislikes;
      this.comments = [];
    }

    addComment(comment) {
      this.comments.push(comment);
    }

    toString() {
      let result = super.toString();
      result += `\nRating: ${this.likes - this.dislikes}`;
      if (this.comments.length > 0) {
        result += "\nComments:";
        this.comments.forEach((comment) => {
          result += `\n * ${comment}`;
        });
      }
      return result;
    }
  }

  class BlogPost extends Post {
    constructor(title, content, views) {
      super(title, content);
      this.views = views;
    }

    view() {
      this.views++;
      return this; // Supports chaining
    }

    toString() {
      return `${super.toString()}\nViews: ${this.views}`;
    }
  }

  return {
    Post,
    SocialMediaPost,
    BlogPost,
  };
}

const classes = solution();

let post = new classes.Post("Post", "Content");
console.log(post.toString());
// Output:
// Post: Post
// Content: Content

let scm = new classes.SocialMediaPost("TestTitle", "TestContent", 25, 30);
scm.addComment("Good post");
scm.addComment("Very good post");
scm.addComment("Wow!");
console.log(scm.toString());
// Output:
// Post: TestTitle
// Content: TestContent
// Rating: -5
// Comments:
//  * Good post
//  * Very good post
//  * Wow!

let blog = new classes.BlogPost("BlogPost", "BlogContent", 50);
console.log(blog.toString());
// Output:
// Post: BlogPost
// Content: BlogContent
// Views: 50

blog.view().view().view();
console.log(blog.toString());
// Output:
// Post: BlogPost
// Content: BlogContent
// Views: 53
