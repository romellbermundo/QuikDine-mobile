import { useEffect, useState } from "react";
import { setIP } from "./IPAddress.js";

export default function initializeVariables() {
  const [user, setUser] = useState("");
  const [email, setEmail] = useState("");
  // For testing, const [isLoggedIn, setIsLoggedIn] = useState(true); will skip login page
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [pantryList, setPantryList] = useState([]);
  const [selectedRecipesList, setSelectedRecipesList] = useState([]);
  const [recipeId, setRecipeId] = useState();
  const [cuisine, setCuisine] = useState("");
  const [mealType, setMealType] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [diet, setDiet] = useState("");
  const [ingredientList, setIngredientList] = useState([]);
  const [ingredientListChecked, setIngredientListChecked] = useState([]);
  const [ingUsed, setIngUsed] = useState([]);
  const [tempSearchQuery, setTempSearchQuery] = useState("");
  const [favoritesList, setFavoritesList] = useState([]);
  const [recipients, setRecipients] = useState([]);
  const [inviteUserIds, setInviteUserIds] = useState([]);
  const [eventId, setEventId] = useState("");
  const [eventList, setEventList] = useState([]);
  const [eventToView, setEventToView] = useState("");
  const [page, setPage] = useState(1);
  const { serverIP } = setIP();

  async function addRecipe() {
    try {
      const packet = { selectedRecipesList, eventId };
      const dataResponse = await fetch(
        `http://${serverIP}:5001/api/firebase/addRecipe`,
        {
          method: "POST",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify(packet),
        }
      );
      const responseValue = await dataResponse.json();
      console.log(responseValue.msg);
    } catch (error) {
      alert(error.message);
    }
  }

  async function updatePantry() {
    try {
      const packet = { pantryList, email };
      const dataResponse = await fetch(
        `http://${serverIP}:5001/api/firebase/addPantry`,
        {
          method: "POST",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify(packet),
        }
      );
      const responseValue = await dataResponse.json();
      console.log(responseValue.msg);
    } catch (error) {
      alert(error.message);
    }
  }
  async function updateFavorites() {
    try {
      const packet = { favoritesList, email };
      const dataResponse = await fetch(
        `http://${serverIP}:5001/api/firebase/addFavorites`,
        {
          method: "POST",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify(packet),
        }
      );
      const responseValue = await dataResponse.json();
      console.log(responseValue.msg);
    } catch (error) {
      alert(error.message);
    }
  }
  async function updateRecipients() {
    try {
      const packet = { recipients, inviteUserIds, eventId };
      const dataResponse = await fetch(
        `http://${serverIP}:5001/api/firebase/addRecipients`,
        {
          method: "POST",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify(packet),
        }
      );
      const responseValue = await dataResponse.json();
      if (recipients.length != inviteUserIds.length) {
        setInviteUserIds(responseValue.inviteUserIds);
      }
      console.log(responseValue.msg);
    } catch (error) {
      alert(error.message);
    }
  }

  // reset search values
  useEffect(() => {
    setIngredientList([...pantryList]);
    setSearchQuery("");
    setMealType("");
    setCuisine("");
    setDiet("");
    setTempSearchQuery("");
  }, [pantryList]);

  // set check boxes of advanced search
  useEffect(() => {
    let tempIngredientChecked = [];
    for (const i in pantryList) {
      tempIngredientChecked[i] = ingredientList.indexOf(pantryList[i]) != -1;
    }
    setIngredientListChecked(tempIngredientChecked);
  }, [ingredientList]);

  // server call to update recipes in event
  useEffect(() => {
    if (isLoggedIn) {
      addRecipe();
    }
  }, [selectedRecipesList]);

  // server call to update pantry
  useEffect(() => {
    if (isLoggedIn) {
      updatePantry();
    }
  }, [pantryList]);

  // server call to update favorites
  useEffect(() => {
    if (isLoggedIn) {
      updateFavorites();
    }
  }, [favoritesList]);

  //server call to update recipients of event
  useEffect(() => {
    if (isLoggedIn) {
      updateRecipients();
    }
  }, [recipients]);

  //put states in object for export
  const variables = {
    user,
    setUser,
    email,
    setEmail,
    isLoggedIn,
    setIsLoggedIn,
    eventId,
    setEventId,
    pantryList,
    setPantryList,
    selectedRecipesList,
    setSelectedRecipesList,
    recipeId,
    setRecipeId,
    cuisine,
    setCuisine,
    mealType,
    setMealType,
    searchQuery,
    setSearchQuery,
    diet,
    setDiet,
    ingredientList,
    setIngredientList,
    ingredientListChecked,
    setIngredientListChecked,
    ingUsed,
    setIngUsed,
    favoritesList,
    setFavoritesList,
    recipients,
    setRecipients,
    tempSearchQuery,
    setTempSearchQuery,
    inviteUserIds,
    setInviteUserIds,
    eventToView,
    setEventToView,
    eventList,
    setEventList,
    page,
    setPage,
    serverIP,
  };

  // export states
  return variables;
}
