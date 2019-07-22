let words = [
  "apple",
  "banana",
  "orange",
  "strawberry",
  "pineapple",
  "coconut",
  "papaya",
  "pear"
];

let headers = {
  "Content-type": "application/json",
  "Access-Control-Allow-Origin": "*"
};

exports.handler = (event, context, callback) => {
  if (event.queryStringParameters.key === "foobar") {
    let randomWord = words[Math.floor(Math.random() * words.length)];

    callback(null, {
      statusCode: 200,
      headers,
      body: JSON.stringify([randomWord])
    });
  } else {
    callback(null, {
      statusCode: 400,
      headers,
      body: JSON.stringify({ error: "invalid API key" })
    });
  }
};
