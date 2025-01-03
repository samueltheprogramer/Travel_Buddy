import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  startDate: "",
  endDate: "",
  searchDetails: {},
  locationDetails: [
    {
      location: "Eiffel Tower",
      country: "Paris",
      rattings: "4.8",
      discount: "75%",
      isFavourite: false,
      mainImage:
        "https://media.architecturaldigest.com/photos/66a951edce728792a48166e6/16:9/w_1920,c_limit/GettyImages-955441104.jpg",
      details:
        "The Eiffel Tower, an iconic symbol of Paris, stands at 324 meters tall. Constructed in 1889, it attracts millions of visitors annually. The tower offers breathtaking views of the city from its observation decks. It is a must-visit landmark, showcasing remarkable engineering and historical significance.",

      hotels: {
        images: [
          "https://hips.hearstapps.com/hmg-prod/images/paris-hotels-with-eiffel-tower-views-8-c-guillaumede-laubier-1664779759.jpeg?crop=1.00xw:0.752xh;0,0.166xh&resize=1200:*",
          "https://frenchly.us/wp-content/uploads/elementor/thumbs/shutterstock_1365619916-qjduskwzqop5a145rbw50zu5c7bjnynaqatclbd0ug.jpg",
        ],
        details:
          "Paris offers a range of luxurious and budget-friendly hotels such as The Ritz Paris and Hotel Plaza Athenee, providing world-class amenities and stunning views of the city skyline.",
      },
      foods: {
        images: [
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_1v_ZXspIa3hDIN7K6NavIKTKuj8X6JcgKj94h9VKT6o8fOzb_S6RQQFwlMgxoheQJS0&usqp=CAU",
          "https://img.freepik.com/premium-photo/plate-food-with-view-eiffel-tower-high-quality_1227647-3393.jpg",
        ],
        details:
          "Paris's culinary scene features local French dishes like Croissants and Coq au Vin, alongside international cuisines, available in fine dining restaurants and vibrant street food markets.",
      },
      activities: {
        images: [
          "https://images.pexels.com/photos/17189976/pexels-photo-17189976/free-photo-of-tourist-posing-under-eiffel-tower.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          "https://res.klook.com/image/upload/c_fill,w_1265,h_712/q_80/w_80,x_15,y_15,g_south_west,l_Klook_water_br_trans_yhcmh3/activities/dmmros2wvn9pkmroouwp.webp",
        ],
        details:
          "Tourists can enjoy romantic boat rides on the Seine River, visit iconic landmarks like the Louvre Museum, and explore cultural heritage at the Notre Dame Cathedral and Montmartre.",
      },
    },
    {
      location: "Taj Mahal",
      country: "India",
      rattings: "4.7",
      discount: "70%",
      isFavourite: false,
      mainImage:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/Taj_Mahal_%28Edited%29.jpeg/1200px-Taj_Mahal_%28Edited%29.jpeg",
      details:
        "The Taj Mahal, located in Agra, India, is a UNESCO World Heritage Site and one of the Seven Wonders of the World. Built in 1632 by Mughal Emperor Shah Jahan as a mausoleum for his wife Mumtaz Mahal, it is renowned for its stunning white marble architecture and intricate carvings. Visit early morning for breathtaking views and avoid the midday crowds. Don’t miss the nearby Agra Fort and Mehtab Bagh for a complete experience!",
      hotels: {
        images: [
          "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/03/e9/b9/68/the-taj-mahal-palace.jpg?w=700&h=-1&s=1",
          "https://media.cntraveler.com/photos/5dee7549d606100008e741f0/16:9/w_2560,c_limit/The-Taj-Mahal-Palace_2019_Taj-Mahal-Palace,-Mumbai---Corridor-1.jpg",
        ],
        details:
          "India offers a range of luxurious and budget-friendly hotels such as The Oberoi Amarvilas and ITC Mughal, providing world-class amenities and stunning views of the city skyline.",
      },
      foods: {
        images: [
          "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/05/12/e9/f5/taj-mahal-food.jpg?w=700&h=400&s=1",
          "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/26/c7/64/d6/when-your-tastebuds-just.jpg?w=600&h=400&s=1",
        ],
        details:
          "India's culinary scene features local Indian dishes like Biryani and Butter Chicken, alongside international cuisines, available in fine dining restaurants and vibrant street food markets.",
      },
      activities: {
        images: [
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpMcLziPLC0bOWCFbTCC6805kWm7Bc3bXw1Q&s",
          "https://res.cloudinary.com/enchanting/q_70,f_auto,c_fill,g_face/enchanting-web/2023/09/1-Taj-Mahal-2.jpg",
        ],
        details:
          "Tourists can enjoy exploring the Taj Mahal, visit iconic landmarks like the Agra Fort, and explore cultural heritage at the Fatehpur Sikri and Mehtab Bagh.",
      },
    },

    {
      location: "Kodaikanal",
      country: "India",
      rattings: "4.5",
      discount: "65%",
      isFavourite: false,
      mainImage:
        "https://www.indyatour.com/images/india/tamil-nadu/kodaikanal-hill-station-tamilnadu.jpg",
      details:
        "Kodaikanal, nestled in Tamil Nadu's Western Ghats, is a serene hill station known as the  Famous for its misty hills, Kodai Lake, and lush greenery, it’s perfect for nature lovers. Don’t miss attractions like Coaker’s Walk, Pillar Rocks, and Bryant Park. Visit between April and June or September to November for the best weather!",
      hotels: {
        images: [
          "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0d/5c/46/c5/night-view-from-opps.jpg?w=1200&h=-1&s=1",
          "https://imgcy.trivago.com/c_fill,d_dummy.jpeg,e_sharpen:60,f_auto,h_534,q_40,w_800/hotelier-images/62/03/52952d0fd6a87a66b5cee32f209c0a65271481f5dbdb43a62ab778e7fa38.jpeg",
        ],
        details:
          "India offers a range of luxurious and budget-friendly hotels such as The Carlton and The Tamara Kodai, providing world-class amenities and stunning views of the city skyline.",
      },
      foods: {
        images: [
          "https://www.fabhotels.com/blog/wp-content/uploads/2018/11/1000x650-114.jpg",
          "https://homefoodkodaikanal.com/wp-content/uploads/2024/01/homefoods122-1-1024x576.webp",
        ],
        details:
          "India's culinary scene features local Indian dishes like Dosa and Idli, alongside international cuisines, available in fine dining restaurants and vibrant street food markets.",
      },
      activities: {
        images: [
          "https://www.stayvista.com/blog/wp-content/uploads/2024/11/24271869876_485a96419a_c.jpg",
          "https://www.e7adventures.in/img/gallery/78.jpg",
        ],
        details:
          "Tourists can enjoy boating in the Kodaikanal Lake, visit iconic landmarks like the Pillar Rocks, and explore cultural heritage at the Bryant Park and Coaker's Walk.",
      },
    },
  ],
  flilterdLocationDetails: [],
  adLocationDetails: {
    location: "Kodaikanal",
    country: "India",
    rattings: "4.5",
    discount: "65%",
    isFavourite: false,
    mainImage:
      "https://www.indyatour.com/images/india/tamil-nadu/kodaikanal-hill-station-tamilnadu.jpg",
    details:
      "Kodaikanal, nestled in Tamil Nadu's Western Ghats, is a serene hill station known as the  Famous for its misty hills, Kodai Lake, and lush greenery, it’s perfect for nature lovers. Don’t miss attractions like Coaker’s Walk, Pillar Rocks, and Bryant Park. Visit between April and June or September to November for the best weather!",
    hotels: {
      images: [
        "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0d/5c/46/c5/night-view-from-opps.jpg?w=1200&h=-1&s=1",
        "https://imgcy.trivago.com/c_fill,d_dummy.jpeg,e_sharpen:60,f_auto,h_534,q_40,w_800/hotelier-images/62/03/52952d0fd6a87a66b5cee32f209c0a65271481f5dbdb43a62ab778e7fa38.jpeg",
      ],
      details:
        "India offers a range of luxurious and budget-friendly hotels such as The Carlton and The Tamara Kodai, providing world-class amenities and stunning views of the city skyline.",
    },
    foods: {
      images: [
        "https://www.fabhotels.com/blog/wp-content/uploads/2018/11/1000x650-114.jpg",
        "https://homefoodkodaikanal.com/wp-content/uploads/2024/01/homefoods122-1-1024x576.webp",
      ],
      details:
        "India's culinary scene features local Indian dishes like Dosa and Idli, alongside international cuisines, available in fine dining restaurants and vibrant street food markets.",
    },
    activities: {
      images: [
        "https://www.stayvista.com/blog/wp-content/uploads/2024/11/24271869876_485a96419a_c.jpg",
        "https://www.e7adventures.in/img/gallery/78.jpg",
      ],
      details:
        "Tourists can enjoy boating in the Kodaikanal Lake, visit iconic landmarks like the Pillar Rocks, and explore cultural heritage at the Bryant Park and Coaker's Walk.",
    },
  },
};

export const searchBarDetailsSlice = createSlice({
  name: "searchBarDetails",
  initialState,
  reducers: {
    setStartDate: (state, action) => {
      state.startDate = action.payload;
    },
    setEndDate: (state, action) => {
      state.endDate = action.payload;
    },
    setSearchDetails: (state, action) => {
      state.searchDetails = action.payload;
    },
    filterByLocationName: (state, action) => {
      const filterName = action.payload.toLowerCase();
      state.flilterdLocationDetails = state.locationDetails.filter((item) =>
        item.location.toLowerCase().includes(filterName)
      );
    },
    // Optional: reset the filter
    resetFilter: (state) => {
      state.flilterdLocationDetails = [];
    },
    toggleFavorite(state, action) {
      const locationName = action.payload;
      state.locationDetails = state.locationDetails.map((location) =>
        location.location === locationName
          ? {
              ...location,
              isFavourite: location?.isFavourite ? false : true,
            }
          : location
      );
      state.flilterdLocationDetails = state.flilterdLocationDetails.map(
        (location) =>
          location.location === locationName
            ? {
                ...location,
                isFavourite: location?.isFavourite ? false : true,
              }
            : location
      );
      state.adLocationDetails =
        state.adLocationDetails?.location === locationName
          ? {
              ...state.adLocationDetails,
              isFavourite: state.adLocationDetails?.isFavourite ? false : true,
            }
          : state.adLocationDetails;
    },
    removeFavorite(state, action) {
      const locationName = action.payload;
      state.locationDetails = state.locationDetails.map((location) =>
        location.location === locationName
          ? {
              ...location,
              isFavourite: false,
            }
          : location
      );
    },
  },
});

export const {
  setStartDate,
  setEndDate,
  setSearchDetails,
  filterByLocationName,
  resetFilter,
  toggleFavorite,
} = searchBarDetailsSlice.actions;
export default searchBarDetailsSlice.reducer;
