function displayPoem(response) {
  console.log("Poem generated");
  new Typewriter("#poem", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

function generatePoem(event) {
  event.preventDefault();

  // build the API URL
  let instructionsInput = document.querySelector("#user-instructions");
  let apiKey = "ddff3a3f7b48902404oatcfa308e9e5b";
  let context =
    "You are a romantic poem expert and experienced with writing all kinds of poems. Your mission is to generate a 4 line poem. Make sure to follow the user instructions.";
  let prompt = `User instructions: Generate a Bulgarian poem about ${instructionsInput.value}`;

  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  console.log("generating poem");
  console.log(`Prompt: ${prompt}`);
  console.log(`Context: ${context}`);
  // Make a call to the API
  axios.get(apiUrl).then(displayPoem);

  // Display the generated poem
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);
