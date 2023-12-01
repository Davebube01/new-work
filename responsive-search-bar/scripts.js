const searchInput = document.getElementById('search-input');
const suggestionsList = document.getElementById('autocomplete-suggestions');

searchInput.addEventListener('keyup', function(event) {
  // Get the search query
  const query = event.target.value;

  // Check if query is empty
  if (!query) {
    suggestionsList.classList.add('hidden');
    return;
  }

  // Fetch suggestions from an API or local data store
  // Replace this with your actual fetch logic
  const suggestions = ['apple', 'banana', 'orange', 'mango', 'grapefruit'];

  // Filter suggestions based on the query
  const filteredSuggestions = suggestions.filter(suggestion => suggestion.toLowerCase().includes(query.toLowerCase()));

  // Clear and update suggestions list
  suggestionsList.innerHTML = '';
  for (const suggestion of filteredSuggestions) {
    const suggestionItem = document.createElement('li');
    suggestionItem.innerText = suggestion;
    suggestionItem.addEventListener('click', function() {
      searchInput.value = suggestion;
      suggestionsList.classList.add('hidden');
    });
    suggestionsList.appendChild(suggestionItem);
  }

  // Show suggestions list
  suggestionsList.classList.remove('hidden');
});
