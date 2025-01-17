interface CategoryItem {
  id: number;
  name: string;
  image: string;
}

export const fetchCategories = async (type: string): Promise<CategoryItem[]> => {
  try {
    const response = await fetch(`/api/categories?type=${type}`);
    if (!response.ok) {
      throw new Error("Failed to fetch categories");
    }
    const data = await response.json();
    return data.data.categories.items;
  } catch (error) {
    console.error("Error fetching categories:", error);
    return [];
  }
};

export const validTypes = ["symptom", "hospital", "healing", "magazine"];
