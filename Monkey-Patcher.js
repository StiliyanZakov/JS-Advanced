function solution(action) {
  const post = this;

  const upvote = () => post.upvotes++;
  const downvote = () => post.downvotes++;

  const score = () => {
    let upvotes = post.upvotes;
    let downvotes = post.downvotes;
    let totalVotes = upvotes + downvotes;
    let balance = upvotes - downvotes;

    // Determine if we need to apply obfuscation
    let reportedUpvotes = upvotes;
    let reportedDownvotes = downvotes;
    if (totalVotes > 50) {
      let obfuscationFactor = Math.ceil(Math.max(upvotes, downvotes) * 0.25);
      reportedUpvotes += obfuscationFactor;
      reportedDownvotes += obfuscationFactor;
    }

    // Determine rating
    let rating = "new";
    if (totalVotes < 10) {
      rating = "new";
    } else if (balance > 0 && upvotes / totalVotes > 0.66) {
      rating = "hot";
    } else if (balance >= 0 && totalVotes > 100) {
      rating = "controversial";
    } else if (balance < 0) {
      rating = "unpopular";
    }

    return [reportedUpvotes, reportedDownvotes, balance, rating];
  };

  // Execute the appropriate action
  if (action === "upvote") {
    upvote();
  } else if (action === "downvote") {
    downvote();
  } else if (action === "score") {
    return score();
  }
 
}
let post = {
  id: '3',
  author: 'emil',
  content: 'wazaaaaa',
  upvotes: 100,
  downvotes: 100
};
solution.call(post, 'upvote');
solution.call(post, 'downvote');
let score = solution.call(post, 'score'); // [127, 127, 0, 'controversial']
console.log(score)
//solution.call(post, 'downvote');         // (executed 50 times)
//score = solution.call(post, 'score');     // [139, 189, -50, 'unpopular']
