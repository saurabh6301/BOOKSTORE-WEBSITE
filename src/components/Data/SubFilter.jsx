import axios from "axios";

// Define the SubFilter without book data initially
export const SubFilter = [
  { path: "/Cotegorie/English", subject: "englishbooks", books: [] },
  { path: "/Cotegorie/Mathematics", subject: "mathbooks", books: [] },
  { path: "/Cotegorie/History", subject: "historybooks", books: [] },
  { path: "/Cotegorie/Hindi", subject: "hindibooks", books: [] },
  { path: "/Cotegorie/Geography", subject: "geographybooks", books: [] },
  { path: "/Cotegorie/Science", subject: "sciencebooks", books: [] },
];

async function fetchBooksData() {
  try {
    await Promise.all(
      SubFilter.map(async (category) => {
        try {
          const response = await axios.get(`http://localhost:9999/${category.subject}`);
          category.books = response.data; // Set the data directly from the response
        } catch (error) {
          console.error(`Error fetching data for ${category.subject}:`, error.message);
        }
      })
    );
  } catch (error) {
    console.error("Error during the fetchBooksData execution:", error.message);
  }
}

// Call the function to fetch data
fetchBooksData();
