import { title } from "process";
import {
  image,
  image2,
  image3,
  image4,
  image5,
  image7,
  image8,
  image9,
  image10,
  image11,
  image1,
  detailImage1,
  detailImage2,
  detailImage3,
  detailImage4,
  customerProfile1,
  customerProfile2,
  customerProfile3,
} from "~/static";

export const ProductsData = [
  {
    id: "1",
    name: "Product title",
    reviewCount: 300,
    rating: 3.4,
    price: 10,
    discount: 12,
    type: "best-seller",
    description: "Lorem ipsum dolor sit amet consectetur. ",
    detail:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam odit voluptatibus minus corporis, cumque repellat! Accusantium quod atque fugit officia!",
    instockProducts: 0,
    productSold: 110,
    quantity: 1,
    size: [
      {
        label: 50.0,
        value: 50.0,
      },
      {
        label: 70.0,
        value: 70.0,
      },
    ],
    images: image,
    detailsImages: [
      detailImage1,
      detailImage2,
      detailImage3,
      detailImage4,
      detailImage1,
      detailImage2,
      detailImage3,
      detailImage4,
    ],
    benefits: {
      title: "benefits",
      description:
        "Consectetur excepteur elit ullamco incididunt voluptate tempor exercitation",
      benefitImage: "",
      benefitdetail: [
        {
          benefitDetailTitle: "Laboris consequat ad ",
          benefittext:
            "Consectetur excepteur elit ullamco incididunt voluptate tempor exercitation. Lorem commodo ullamco quis velit officia aute laboris elit sit exercitation ut esse pariatur",
        },
        {
          benefitDetailTitle: "Duis duis do labore pariatur  ",
          benefittext:
            " ullamco quis velit officia aute laboris elit sit exercitation ut esse pariatur",
        },
        {
          benefitDetailTitle: "Deserunt ex  ",
          benefittext:
            "Consectetur excepteur ullamco quis velit officia aute laboris elit sit exercitation ut esse pariatur",
        },
      ],
    },

    Ingredients: {
      title: "Ingredients",
      description:
        "Consectetur excepteur elit ullamco  incididunt voluptate tempor exercitation",
      Ingredientsdetail: [
        {
          IngredientsName: "Laboris consequat ad ",
          IngredientText:
            "Consectetur excepteur elit ullamco orem commodo ullamco quis velit officia aute laboris elit sit exercitation ut esse pariatur",
        },
        {
          IngredientsName: "Laboris consequat ad ",
          IngredientText:
            "Consectetur excepteur elit ullamco quis velit officia aute laboris elit sit exercitation ut esse pariatur",
        },
        {
          IngredientsName: "Laboris consequat ad ",
          IngredientText:
            "Consectetur Lorem commodo ullamco quis velit officia aute laboris elit sit  pariatur",
        },
      ],
    },

    Howtouse: {
      title: "How to use",
      description:
        "Consectetur excepteur elit ullamco incididunt voluptate tempor exercitation",
      howtouseDetail: [
        {
          howtouseName: "Laboris consequat ad ",
          howtouseText:
            "Consectetur excepteur elitLorem quis velit officia aute laboris elit sit exercitation ut esse pariatur",
        },
        {
          howtouseName: "Laboris consequat ad ",
          howtouseText: "Consectetur  aute laboris elit sit  pariatur",
        },
        {
          howtouseName: "Laboris consequat ad ",
          howtouseText:
            "Consectetur excepteur elit ullamco incididunt voluptate ",
        },
      ],
    },
  },
  {
    id: "233",
    name: "Product title",
    reviewCount: 300,
    rating: 4.5,
    price: 10,
    discount: 12,
    type: "best-seller",
    description: "Lorem ipsum dolor sit amet consectetur. ",
    detail:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam odit voluptatibus minus corporis, cumque repellat! Accusantium quod atque fugit officia!",
    instockProducts: 0,
    productSold: 0,
    quantity: 1,
    size: [
      {
        label: 50.0,
        value: 50.0,
      },
      {
        label: 70.0,
        value: 70.0,
      },
    ],
    images: image1,
    detailsImages: [detailImage1, detailImage2, detailImage3, detailImage4],

    benefits: {
      title: "benefits",
      description:
        "Consectetur excepteur elit ullamco incididunt voluptate tempor exercitation",
      benefitdetail: [
        {
          benefitDetailTitle: "Laboris consequat ad ",
          benefittext:
            "Consectetur excepteur elit ullamco incididunt voluptate tempor exercitation. Lorem commodo ullamco quis velit officia aute laboris elit sit exercitation ut esse pariatur",
        },
        {
          benefitDetailTitle: "Duis duis do labore pariatur  ",
          benefittext:
            " ullamco quis velit officia aute laboris elit sit exercitation ut esse pariatur",
        },
        {
          benefitDetailTitle: "Deserunt ex  ",
          benefittext:
            "Consectetur excepteur ullamco quis velit officia aute laboris elit sit exercitation ut esse pariatur",
        },
      ],
    },

    Ingredients: {
      title: "Ingredients",
      description:
        "Consectetur excepteur elit ullamco incididunt voluptate tempor exercitation",
      Ingredientsdetail: [
        {
          IngredientsName: "Laboris consequat ad ",
          IngredientText:
            "Consectetur excepteur elit ullamco orem commodo ullamco quis velit officia aute laboris elit sit exercitation ut esse pariatur",
        },
        {
          IngredientsName: "Laboris consequat ad ",
          IngredientText:
            "Consectetur excepteur elit ullamco quis velit officia aute laboris elit sit exercitation ut esse pariatur",
        },
        {
          IngredientsName: "Laboris consequat ad ",
          IngredientText:
            "Consectetur Lorem commodo ullamco quis velit officia aute laboris elit sit  pariatur",
        },
      ],
    },

    Howtouse: {
      title: "How to use",

      description:
        "Consectetur excepteur elit ullamco incididunt voluptate tempor exercitation. Lorem commodo ullamco quis velit officia aute laboris elit sit exercitation ut esse pariatur",

      howtouseDetail: [
        {
          howtouseName: "Laboris consequat ad ",
          howtouseText:
            "Consectetur excepteur elitLorem quis velit officia aute laboris elit sit exercitation ut esse pariatur",
        },
        {
          howtouseName: "Laboris consequat ad ",
          howtouseText: "Consectetur  aute laboris elit sit  pariatur",
        },
        {
          howtouseName: "Laboris consequat ad ",
          howtouseText:
            "Consectetur excepteur elit ullamco incididunt voluptate ",
        },
      ],
    },
  },
  {
    id: "2",
    name: "Product title",
    reviewCount: 300,
    rating: 4.5,
    price: 10,
    discount: 12,
    type: "best-seller",
    description: "Lorem ipsum dolor sit amet consectetur. ",
    detail:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam odit voluptatibus minus corporis, cumque repellat! Accusantium quod atque fugit officia!",
    instockProducts: 0,
    productSold: 0,
    quantity: 1,
    size: [
      {
        label: 50.0,
        value: 50.0,
      },
      {
        label: 70.0,
        value: 70.0,
      },
    ],
    images: image2,
    detailsImages: [detailImage1, detailImage2, detailImage3, detailImage4],
    benefits: {
      title: "benefits",
      description:
        "Consectetur excepteur elit ullamco incididunt voluptate tempor exercitation",
      benefitImage: "",
      benefitdetail: [
        {
          benefitDetailTitle: "Laboris consequat ad ",
          benefittext:
            "Consectetur excepteur elit ullamco incididunt voluptate tempor exercitation. Lorem commodo ullamco quis velit officia aute laboris elit sit exercitation ut esse pariatur",
        },
        {
          benefitDetailTitle: "Duis duis do labore pariatur  ",
          benefittext:
            " ullamco quis velit officia aute laboris elit sit exercitation ut esse pariatur",
        },
        {
          benefitDetailTitle: "Deserunt ex  ",
          benefittext:
            "Consectetur excepteur ullamco quis velit officia aute laboris elit sit exercitation ut esse pariatur",
        },
      ],
    },

    Ingredients: {
      title: "Ingredients",
      description:
        "Consectetur excepteur elit ullamco  incididunt voluptate tempor exercitation",
      Ingredientsdetail: [
        {
          IngredientsName: "Laboris consequat ad ",
          IngredientText:
            "Consectetur excepteur elit ullamco orem commodo ullamco quis velit officia aute laboris elit sit exercitation ut esse pariatur",
        },
        {
          IngredientsName: "Laboris consequat ad ",
          IngredientText:
            "Consectetur excepteur elit ullamco quis velit officia aute laboris elit sit exercitation ut esse pariatur",
        },
        {
          IngredientsName: "Laboris consequat ad ",
          IngredientText:
            "Consectetur Lorem commodo ullamco quis velit officia aute laboris elit sit  pariatur",
        },
      ],
    },

    Howtouse: {
      title: "How to use",
      description:
        "Consectetur excepteur elit ullamco incididunt voluptate tempor exercitation",
      howtouseDetail: [
        {
          howtouseName: "Laboris consequat ad ",
          howtouseText:
            "Consectetur excepteur elitLorem quis velit officia aute laboris elit sit exercitation ut esse pariatur",
        },
        {
          howtouseName: "Laboris consequat ad ",
          howtouseText: "Consectetur  aute laboris elit sit  pariatur",
        },
        {
          howtouseName: "Laboris consequat ad ",
          howtouseText:
            "Consectetur excepteur elit ullamco incididunt voluptate ",
        },
      ],
    },
  },

  {
    id: "3",
    name: "Product title",
    reviewCount: 300,
    rating: 4.5,
    price: 10,
    discount: 12,
    type: "best-seller",
    description: "Lorem ipsum dolor sit amet consectetur. ",
    detail:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam odit voluptatibus minus corporis, cumque repellat! Accusantium quod atque fugit officia!",
    instockProducts: 0,
    productSold: 0,
    quantity: 1,
    size: [
      {
        label: 50.0,
        value: 50.0,
      },
      {
        label: 70.0,
        value: 70.0,
      },
    ],
    images: image,
    benefits: {
      title: "benefits",
      description:
        "Consectetur excepteur elit ullamco incididunt voluptate tempor exercitation",
      benefitImage: "",
      benefitdetail: [
        {
          benefitDetailTitle: "Laboris consequat ad ",
          benefittext:
            "Consectetur excepteur elit ullamco incididunt voluptate tempor exercitation. Lorem commodo ullamco quis velit officia aute laboris elit sit exercitation ut esse pariatur",
        },
        {
          benefitDetailTitle: "Duis duis do labore pariatur  ",
          benefittext:
            " ullamco quis velit officia aute laboris elit sit exercitation ut esse pariatur",
        },
        {
          benefitDetailTitle: "Deserunt ex  ",
          benefittext:
            "Consectetur excepteur ullamco quis velit officia aute laboris elit sit exercitation ut esse pariatur",
        },
      ],
    },

    Ingredients: {
      title: "Ingredients",
      description:
        "Consectetur excepteur elit ullamco  incididunt voluptate tempor exercitation",
      Ingredientsdetail: [
        {
          IngredientsName: "Laboris consequat ad ",
          IngredientText:
            "Consectetur excepteur elit ullamco orem commodo ullamco quis velit officia aute laboris elit sit exercitation ut esse pariatur",
        },
        {
          IngredientsName: "Laboris consequat ad ",
          IngredientText:
            "Consectetur excepteur elit ullamco quis velit officia aute laboris elit sit exercitation ut esse pariatur",
        },
        {
          IngredientsName: "Laboris consequat ad ",
          IngredientText:
            "Consectetur Lorem commodo ullamco quis velit officia aute laboris elit sit  pariatur",
        },
      ],
    },

    Howtouse: {
      title: "How to use",
      description:
        "Consectetur excepteur elit ullamco incididunt voluptate tempor exercitation",
      howtouseDetail: [
        {
          howtouseName: "Laboris consequat ad ",
          howtouseText:
            "Consectetur excepteur elitLorem quis velit officia aute laboris elit sit exercitation ut esse pariatur",
        },
        {
          howtouseName: "Laboris consequat ad ",
          howtouseText: "Consectetur  aute laboris elit sit  pariatur",
        },
        {
          howtouseName: "Laboris consequat ad ",
          howtouseText:
            "Consectetur excepteur elit ullamco incididunt voluptate ",
        },
      ],
    },
  },
  {
    id: "4",
    name: "Product title",
    reviewCount: 300,
    rating: 4.5,
    price: 10,
    discount: 12,
    type: "best-seller",
    description: "Lorem ipsum dolor sit amet consectetur. ",
    detail:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam odit voluptatibus minus corporis, cumque repellat! Accusantium quod atque fugit officia!",
    instockProducts: 0,
    productSold: 0,
    quantity: 1,
    size: [
      {
        label: 50.0,
        value: 50.0,
      },
      {
        label: 70.0,
        value: 70.0,
      },
    ],
    images: image3,
    detailsImages: [detailImage1, detailImage2, detailImage3, detailImage4],
    benefits: {
      title: "benefits",
      description:
        "Consectetur excepteur elit ullamco incididunt voluptate tempor exercitation",
      benefitImage: "",
      benefitdetail: [
        {
          benefitDetailTitle: "Laboris consequat ad ",
          benefittext:
            "Consectetur excepteur elit ullamco incididunt voluptate tempor exercitation. Lorem commodo ullamco quis velit officia aute laboris elit sit exercitation ut esse pariatur",
        },
        {
          benefitDetailTitle: "Duis duis do labore pariatur  ",
          benefittext:
            " ullamco quis velit officia aute laboris elit sit exercitation ut esse pariatur",
        },
        {
          benefitDetailTitle: "Deserunt ex  ",
          benefittext:
            "Consectetur excepteur ullamco quis velit officia aute laboris elit sit exercitation ut esse pariatur",
        },
      ],
    },

    Ingredients: {
      title: "Ingredients",
      description:
        "Consectetur excepteur elit ullamco  incididunt voluptate tempor exercitation",
      Ingredientsdetail: [
        {
          IngredientsName: "Laboris consequat ad ",
          IngredientText:
            "Consectetur excepteur elit ullamco orem commodo ullamco quis velit officia aute laboris elit sit exercitation ut esse pariatur",
        },
        {
          IngredientsName: "Laboris consequat ad ",
          IngredientText:
            "Consectetur excepteur elit ullamco quis velit officia aute laboris elit sit exercitation ut esse pariatur",
        },
        {
          IngredientsName: "Laboris consequat ad ",
          IngredientText:
            "Consectetur Lorem commodo ullamco quis velit officia aute laboris elit sit  pariatur",
        },
      ],
    },

    Howtouse: {
      title: "How to use",
      description:
        "Consectetur excepteur elit ullamco incididunt voluptate tempor exercitation",
      howtouseDetail: [
        {
          howtouseName: "Laboris consequat ad ",
          howtouseText:
            "Consectetur excepteur elitLorem quis velit officia aute laboris elit sit exercitation ut esse pariatur",
        },
        {
          howtouseName: "Laboris consequat ad ",
          howtouseText: "Consectetur  aute laboris elit sit  pariatur",
        },
        {
          howtouseName: "Laboris consequat ad ",
          howtouseText:
            "Consectetur excepteur elit ullamco incididunt voluptate ",
        },
      ],
    },
  },
  {
    id: "5",
    name: "Product title",
    reviewCount: 300,
    rating: 4.5,
    price: 10,
    discount: 12,
    type: "best-seller",
    description: "Lorem ipsum dolor sit amet consectetur. ",
    detail:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam odit voluptatibus minus corporis, cumque repellat! Accusantium quod atque fugit officia!",
    instockProducts: 0,
    productSold: 0,
    quantity: 1,
    size: [
      {
        label: 50.0,
        value: 50.0,
      },
      {
        label: 70.0,
        value: 70.0,
      },
    ],
    images: image4,
    detailsImages: [detailImage1, detailImage2, detailImage3, detailImage4],
    benefits: {
      title: "benefits",
      description:
        "Consectetur excepteur elit ullamco incididunt voluptate tempor exercitation",
      benefitImage: "",
      benefitdetail: [
        {
          benefitDetailTitle: "Laboris consequat ad ",
          benefittext:
            "Consectetur excepteur elit ullamco incididunt voluptate tempor exercitation. Lorem commodo ullamco quis velit officia aute laboris elit sit exercitation ut esse pariatur",
        },
        {
          benefitDetailTitle: "Duis duis do labore pariatur  ",
          benefittext:
            " ullamco quis velit officia aute laboris elit sit exercitation ut esse pariatur",
        },
        {
          benefitDetailTitle: "Deserunt ex  ",
          benefittext:
            "Consectetur excepteur ullamco quis velit officia aute laboris elit sit exercitation ut esse pariatur",
        },
      ],
    },

    Ingredients: {
      title: "Ingredients",
      description:
        "Consectetur excepteur elit ullamco  incididunt voluptate tempor exercitation",
      Ingredientsdetail: [
        {
          IngredientsName: "Laboris consequat ad ",
          IngredientText:
            "Consectetur excepteur elit ullamco orem commodo ullamco quis velit officia aute laboris elit sit exercitation ut esse pariatur",
        },
        {
          IngredientsName: "Laboris consequat ad ",
          IngredientText:
            "Consectetur excepteur elit ullamco quis velit officia aute laboris elit sit exercitation ut esse pariatur",
        },
        {
          IngredientsName: "Laboris consequat ad ",
          IngredientText:
            "Consectetur Lorem commodo ullamco quis velit officia aute laboris elit sit  pariatur",
        },
      ],
    },

    Howtouse: {
      title: "How to use",
      description:
        "Consectetur excepteur elit ullamco incididunt voluptate tempor exercitation",
      howtouseDetail: [
        {
          howtouseName: "Laboris consequat ad ",
          howtouseText:
            "Consectetur excepteur elitLorem quis velit officia aute laboris elit sit exercitation ut esse pariatur",
        },
        {
          howtouseName: "Laboris consequat ad ",
          howtouseText: "Consectetur  aute laboris elit sit  pariatur",
        },
        {
          howtouseName: "Laboris consequat ad ",
          howtouseText:
            "Consectetur excepteur elit ullamco incididunt voluptate ",
        },
      ],
    },
  },
  {
    id: "6",
    name: "Product title",
    reviewCount: 300,
    rating: 4.5,
    price: 10,
    discount: 12,
    type: "",
    description: "Lorem ipsum dolor sit amet consectetur. ",
    detail:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam odit voluptatibus minus corporis, cumque repellat! Accusantium quod atque fugit officia!",
    instockProducts: 0,
    productSold: 0,
    quantity: 1,
    size: [
      {
        label: 50.0,
        value: 50.0,
      },
      {
        label: 70.0,
        value: 70.0,
      },
    ],
    images: image5,
    detailsImages: [detailImage1, detailImage2, detailImage3, detailImage4],
    benefits: {
      title: "benefits",
      description:
        "Consectetur excepteur elit ullamco incididunt voluptate tempor exercitation",
      benefitImage: "",
      benefitdetail: [
        {
          benefitDetailTitle: "Laboris consequat ad ",
          benefittext:
            "Consectetur excepteur elit ullamco incididunt voluptate tempor exercitation. Lorem commodo ullamco quis velit officia aute laboris elit sit exercitation ut esse pariatur",
        },
        {
          benefitDetailTitle: "Duis duis do labore pariatur  ",
          benefittext:
            " ullamco quis velit officia aute laboris elit sit exercitation ut esse pariatur",
        },
        {
          benefitDetailTitle: "Deserunt ex  ",
          benefittext:
            "Consectetur excepteur ullamco quis velit officia aute laboris elit sit exercitation ut esse pariatur",
        },
      ],
    },

    Ingredients: {
      title: "Ingredients",
      description:
        "Consectetur excepteur elit ullamco  incididunt voluptate tempor exercitation",
      Ingredientsdetail: [
        {
          IngredientsName: "Laboris consequat ad ",
          IngredientText:
            "Consectetur excepteur elit ullamco orem commodo ullamco quis velit officia aute laboris elit sit exercitation ut esse pariatur",
        },
        {
          IngredientsName: "Laboris consequat ad ",
          IngredientText:
            "Consectetur excepteur elit ullamco quis velit officia aute laboris elit sit exercitation ut esse pariatur",
        },
        {
          IngredientsName: "Laboris consequat ad ",
          IngredientText:
            "Consectetur Lorem commodo ullamco quis velit officia aute laboris elit sit  pariatur",
        },
      ],
    },

    Howtouse: {
      title: "How to use",
      description:
        "Consectetur excepteur elit ullamco incididunt voluptate tempor exercitation",
      howtouseDetail: [
        {
          howtouseName: "Laboris consequat ad ",
          howtouseText:
            "Consectetur excepteur elitLorem quis velit officia aute laboris elit sit exercitation ut esse pariatur",
        },
        {
          howtouseName: "Laboris consequat ad ",
          howtouseText: "Consectetur  aute laboris elit sit  pariatur",
        },
        {
          howtouseName: "Laboris consequat ad ",
          howtouseText:
            "Consectetur excepteur elit ullamco incididunt voluptate ",
        },
      ],
    },
  },
  {
    id: "7",
    name: "Product title",
    reviewCount: 300,
    rating: 4.5,
    price: 10,
    discount: 12,
    type: "",
    description: "Lorem ipsum dolor sit amet consectetur. ",
    detail:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam odit voluptatibus minus corporis, cumque repellat! Accusantium quod atque fugit officia!",
    instockProducts: 0,
    productSold: 0,
    quantity: 1,
    size: [
      {
        label: 50.0,
        value: 50.0,
      },
      {
        label: 70.0,
        value: 70.0,
      },
    ],
    images: image7,
    detailsImages: [detailImage1, detailImage2, detailImage3, detailImage4],
    benefits: {
      title: "benefits",
      description:
        "Consectetur excepteur elit ullamco incididunt voluptate tempor exercitation",
      benefitImage: "",
      benefitdetail: [
        {
          benefitDetailTitle: "Laboris consequat ad ",
          benefittext:
            "Consectetur excepteur elit ullamco incididunt voluptate tempor exercitation. Lorem commodo ullamco quis velit officia aute laboris elit sit exercitation ut esse pariatur",
        },
        {
          benefitDetailTitle: "Duis duis do labore pariatur  ",
          benefittext:
            " ullamco quis velit officia aute laboris elit sit exercitation ut esse pariatur",
        },
        {
          benefitDetailTitle: "Deserunt ex  ",
          benefittext:
            "Consectetur excepteur ullamco quis velit officia aute laboris elit sit exercitation ut esse pariatur",
        },
      ],
    },

    Ingredients: {
      title: "Ingredients",
      description:
        "Consectetur excepteur elit ullamco  incididunt voluptate tempor exercitation",
      Ingredientsdetail: [
        {
          IngredientsName: "Laboris consequat ad ",
          IngredientText:
            "Consectetur excepteur elit ullamco orem commodo ullamco quis velit officia aute laboris elit sit exercitation ut esse pariatur",
        },
        {
          IngredientsName: "Laboris consequat ad ",
          IngredientText:
            "Consectetur excepteur elit ullamco quis velit officia aute laboris elit sit exercitation ut esse pariatur",
        },
        {
          IngredientsName: "Laboris consequat ad ",
          IngredientText:
            "Consectetur Lorem commodo ullamco quis velit officia aute laboris elit sit  pariatur",
        },
      ],
    },

    Howtouse: {
      title: "How to use",
      description:
        "Consectetur excepteur elit ullamco incididunt voluptate tempor exercitation",
      howtouseDetail: [
        {
          howtouseName: "Laboris consequat ad ",
          howtouseText:
            "Consectetur excepteur elitLorem quis velit officia aute laboris elit sit exercitation ut esse pariatur",
        },
        {
          howtouseName: "Laboris consequat ad ",
          howtouseText: "Consectetur  aute laboris elit sit  pariatur",
        },
        {
          howtouseName: "Laboris consequat ad ",
          howtouseText:
            "Consectetur excepteur elit ullamco incididunt voluptate ",
        },
      ],
    },
  },
  {
    id: "8",
    name: "Product title",
    reviewCount: 300,
    rating: 4.5,
    price: 10,
    discount: 12,
    type: "best-seller",
    description: "Lorem ipsum dolor sit amet consectetur. ",
    detail:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam odit voluptatibus minus corporis, cumque repellat! Accusantium quod atque fugit officia!",
    instockProducts: 0,
    productSold: 0,
    quantity: 1,
    size: [
      {
        label: 50.0,
        value: 50.0,
      },
      {
        label: 70.0,
        value: 70.0,
      },
    ],
    images: image8,
    detailsImages: [detailImage1, detailImage2, detailImage3, detailImage4],
    benefits: {
      title: "benefits",
      description:
        "Consectetur excepteur elit ullamco incididunt voluptate tempor exercitation",
      benefitImage: "",
      benefitdetail: [
        {
          benefitDetailTitle: "Laboris consequat ad ",
          benefittext:
            "Consectetur excepteur elit ullamco incididunt voluptate tempor exercitation. Lorem commodo ullamco quis velit officia aute laboris elit sit exercitation ut esse pariatur",
        },
        {
          benefitDetailTitle: "Duis duis do labore pariatur  ",
          benefittext:
            " ullamco quis velit officia aute laboris elit sit exercitation ut esse pariatur",
        },
        {
          benefitDetailTitle: "Deserunt ex  ",
          benefittext:
            "Consectetur excepteur ullamco quis velit officia aute laboris elit sit exercitation ut esse pariatur",
        },
      ],
    },

    Ingredients: {
      title: "Ingredients",
      description:
        "Consectetur excepteur elit ullamco  incididunt voluptate tempor exercitation",
      Ingredientsdetail: [
        {
          IngredientsName: "Laboris consequat ad ",
          IngredientText:
            "Consectetur excepteur elit ullamco orem commodo ullamco quis velit officia aute laboris elit sit exercitation ut esse pariatur",
        },
        {
          IngredientsName: "Laboris consequat ad ",
          IngredientText:
            "Consectetur excepteur elit ullamco quis velit officia aute laboris elit sit exercitation ut esse pariatur",
        },
        {
          IngredientsName: "Laboris consequat ad ",
          IngredientText:
            "Consectetur Lorem commodo ullamco quis velit officia aute laboris elit sit  pariatur",
        },
      ],
    },

    Howtouse: {
      title: "How to use",
      description:
        "Consectetur excepteur elit ullamco incididunt voluptate tempor exercitation",
      howtouseDetail: [
        {
          howtouseName: "Laboris consequat ad ",
          howtouseText:
            "Consectetur excepteur elitLorem quis velit officia aute laboris elit sit exercitation ut esse pariatur",
        },
        {
          howtouseName: "Laboris consequat ad ",
          howtouseText: "Consectetur  aute laboris elit sit  pariatur",
        },
        {
          howtouseName: "Laboris consequat ad ",
          howtouseText:
            "Consectetur excepteur elit ullamco incididunt voluptate ",
        },
      ],
    },
  },
  {
    id: "9",
    name: "Product title",
    reviewCount: 300,
    rating: 4.5,
    price: 10,
    discount: 12,
    type: "best-seller",
    description: "Lorem ipsum dolor sit amet consectetur. ",
    detail:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam odit voluptatibus minus corporis, cumque repellat! Accusantium quod atque fugit officia!",
    instockProducts: 0,
    productSold: 0,
    quantity: 1,
    size: [
      {
        label: 50.0,
        value: 50.0,
      },
      {
        label: 70.0,
        value: 70.0,
      },
    ],
    images: image9,
    detailsImages: [detailImage1, detailImage2, detailImage3, detailImage4],
    benefits: {
      title: "benefits",
      description:
        "Consectetur excepteur elit ullamco incididunt voluptate tempor exercitation",
      benefitImage: "",
      benefitdetail: [
        {
          benefitDetailTitle: "Laboris consequat ad ",
          benefittext:
            "Consectetur excepteur elit ullamco incididunt voluptate tempor exercitation. Lorem commodo ullamco quis velit officia aute laboris elit sit exercitation ut esse pariatur",
        },
        {
          benefitDetailTitle: "Duis duis do labore pariatur  ",
          benefittext:
            " ullamco quis velit officia aute laboris elit sit exercitation ut esse pariatur",
        },
        {
          benefitDetailTitle: "Deserunt ex  ",
          benefittext:
            "Consectetur excepteur ullamco quis velit officia aute laboris elit sit exercitation ut esse pariatur",
        },
      ],
    },

    Ingredients: {
      title: "Ingredients",
      description:
        "Consectetur excepteur elit ullamco  incididunt voluptate tempor exercitation",
      Ingredientsdetail: [
        {
          IngredientsName: "Laboris consequat ad ",
          IngredientText:
            "Consectetur excepteur elit ullamco orem commodo ullamco quis velit officia aute laboris elit sit exercitation ut esse pariatur",
        },
        {
          IngredientsName: "Laboris consequat ad ",
          IngredientText:
            "Consectetur excepteur elit ullamco quis velit officia aute laboris elit sit exercitation ut esse pariatur",
        },
        {
          IngredientsName: "Laboris consequat ad ",
          IngredientText:
            "Consectetur Lorem commodo ullamco quis velit officia aute laboris elit sit  pariatur",
        },
      ],
    },

    Howtouse: {
      title: "How to use",
      description:
        "Consectetur excepteur elit ullamco incididunt voluptate tempor exercitation",
      howtouseDetail: [
        {
          howtouseName: "Laboris consequat ad ",
          howtouseText:
            "Consectetur excepteur elitLorem quis velit officia aute laboris elit sit exercitation ut esse pariatur",
        },
        {
          howtouseName: "Laboris consequat ad ",
          howtouseText: "Consectetur  aute laboris elit sit  pariatur",
        },
        {
          howtouseName: "Laboris consequat ad ",
          howtouseText:
            "Consectetur excepteur elit ullamco incididunt voluptate ",
        },
      ],
    },
  },
  {
    id: "10",
    name: "Product title",
    reviewCount: 300,
    rating: 4.5,
    price: 10,
    discount: 12,
    type: "",
    description: "Lorem ipsum dolor sit amet consectetur. ",
    detail:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam odit voluptatibus minus corporis, cumque repellat! Accusantium quod atque fugit officia!",
    instockProducts: 0,
    productSold: 0,
    quantity: 1,
    size: [
      {
        label: 50.0,
        value: 50.0,
      },
      {
        label: 70.0,
        value: 70.0,
      },
    ],
    images: image10,
    detailsImages: [detailImage1, detailImage2, detailImage3, detailImage4],
    benefits: {
      title: "benefits",
      description:
        "Consectetur excepteur elit ullamco incididunt voluptate tempor exercitation",
      benefitImage: "",
      benefitdetail: [
        {
          benefitDetailTitle: "Laboris consequat ad ",
          benefittext:
            "Consectetur excepteur elit ullamco incididunt voluptate tempor exercitation. Lorem commodo ullamco quis velit officia aute laboris elit sit exercitation ut esse pariatur",
        },
        {
          benefitDetailTitle: "Duis duis do labore pariatur  ",
          benefittext:
            " ullamco quis velit officia aute laboris elit sit exercitation ut esse pariatur",
        },
        {
          benefitDetailTitle: "Deserunt ex  ",
          benefittext:
            "Consectetur excepteur ullamco quis velit officia aute laboris elit sit exercitation ut esse pariatur",
        },
      ],
    },

    Ingredients: {
      title: "Ingredients",
      description:
        "Consectetur excepteur elit ullamco  incididunt voluptate tempor exercitation",
      Ingredientsdetail: [
        {
          IngredientsName: "Laboris consequat ad ",
          IngredientText:
            "Consectetur excepteur elit ullamco orem commodo ullamco quis velit officia aute laboris elit sit exercitation ut esse pariatur",
        },
        {
          IngredientsName: "Laboris consequat ad ",
          IngredientText:
            "Consectetur excepteur elit ullamco quis velit officia aute laboris elit sit exercitation ut esse pariatur",
        },
        {
          IngredientsName: "Laboris consequat ad ",
          IngredientText:
            "Consectetur Lorem commodo ullamco quis velit officia aute laboris elit sit  pariatur",
        },
      ],
    },

    Howtouse: {
      title: "How to use",
      description:
        "Consectetur excepteur elit ullamco incididunt voluptate tempor exercitation",
      howtouseDetail: [
        {
          howtouseName: "Laboris consequat ad ",
          howtouseText:
            "Consectetur excepteur elitLorem quis velit officia aute laboris elit sit exercitation ut esse pariatur",
        },
        {
          howtouseName: "Laboris consequat ad ",
          howtouseText: "Consectetur  aute laboris elit sit  pariatur",
        },
        {
          howtouseName: "Laboris consequat ad ",
          howtouseText:
            "Consectetur excepteur elit ullamco incididunt voluptate ",
        },
      ],
    },
  },
  {
    id: "17",
    name: "Product title",
    reviewCount: 300,
    rating: 4.5,
    price: 10,
    discount: 12,
    type: "",
    description: "Lorem ipsum dolor sit amet consectetur. ",
    detail:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam odit voluptatibus minus corporis, cumque repellat! Accusantium quod atque fugit officia!",
    instockProducts: 0,
    productSold: 0,
    quantity: 1,
    size: [
      {
        label: 50.0,
        value: 50.0,
      },
      {
        label: 70.0,
        value: 70.0,
      },
    ],
    images: image11,
    detailsImages: [detailImage1, detailImage2, detailImage3, detailImage4],
    benefits: {
      title: "benefits",
      description:
        "Consectetur excepteur elit ullamco incididunt voluptate tempor exercitation",
      benefitImage: "",
      benefitdetail: [
        {
          benefitDetailTitle: "Laboris consequat ad ",
          benefittext:
            "Consectetur excepteur elit ullamco incididunt voluptate tempor exercitation. Lorem commodo ullamco quis velit officia aute laboris elit sit exercitation ut esse pariatur",
        },
        {
          benefitDetailTitle: "Duis duis do labore pariatur  ",
          benefittext:
            " ullamco quis velit officia aute laboris elit sit exercitation ut esse pariatur",
        },
        {
          benefitDetailTitle: "Deserunt ex  ",
          benefittext:
            "Consectetur excepteur ullamco quis velit officia aute laboris elit sit exercitation ut esse pariatur",
        },
      ],
    },

    Ingredients: {
      title: "Ingredients",
      description:
        "Consectetur excepteur elit ullamco  incididunt voluptate tempor exercitation",
      Ingredientsdetail: [
        {
          IngredientsName: "Laboris consequat ad ",
          IngredientText:
            "Consectetur excepteur elit ullamco orem commodo ullamco quis velit officia aute laboris elit sit exercitation ut esse pariatur",
        },
        {
          IngredientsName: "Laboris consequat ad ",
          IngredientText:
            "Consectetur excepteur elit ullamco quis velit officia aute laboris elit sit exercitation ut esse pariatur",
        },
        {
          IngredientsName: "Laboris consequat ad ",
          IngredientText:
            "Consectetur Lorem commodo ullamco quis velit officia aute laboris elit sit  pariatur",
        },
      ],
    },

    Howtouse: {
      title: "How to use",
      description:
        "Consectetur excepteur elit ullamco incididunt voluptate tempor exercitation",
      howtouseDetail: [
        {
          howtouseName: "Laboris consequat ad ",
          howtouseText:
            "Consectetur excepteur elitLorem quis velit officia aute laboris elit sit exercitation ut esse pariatur",
        },
        {
          howtouseName: "Laboris consequat ad ",
          howtouseText: "Consectetur  aute laboris elit sit  pariatur",
        },
        {
          howtouseName: "Laboris consequat ad ",
          howtouseText:
            "Consectetur excepteur elit ullamco incididunt voluptate ",
        },
      ],
    },
  },
];
export const Customer_feedback = [
  {
    customerName: "Vox odison",
    image: customerProfile1,
    rating: 5,
    date: "9",
    comment:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus tempora eum velit, voluptatem aspernatur dolore fugiat expedita quaerat aut error omnis ea mollitia officiis ullam provident tempore non adipisci. Iste?",
  },
  {
    customerName: "Vox",
    image: customerProfile2,
    rating: 1,
    date: "3",
    comment:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus tempora eum velit, voluptatem aspernatur dolore fugiat expedita quaerat aut error omnis ea mollitia officiis ullam provident tempore non adipisci. Iste?",
  },
  {
    customerName: "jonh vox",
    image: customerProfile3,
    rating: 2,
    date: "7",
    comment:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus tempora eum velit, voluptatem aspernatur dolore fugiat expedita quaerat aut error omnis ea mollitia officiis ullam provident tempore non adipisci. Iste?",
  },
  {
    customerName: "Luiti",
    image: customerProfile1,
    rating: 3,
    date: "11",
    comment:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus tempora eum velit, voluptatem aspernatur dolore fugiat expedita quaerat aut error omnis ea mollitia officiis ullam provident tempore non adipisci. Iste?",
  },
];

export const Faqs = [
  {
    title:
      "Nisi nisimagna nostrud non consequat conse magna nostrud non consequat conse ?",
    text: "Ullamco enim ut culpa irure non qui est duis et aute proident reprehenderit tempor mollit. Aliquip excepteur nisi culpa reprehenderit adipisicing aliquip excepteur nulla minim.",
  },
  {
    title: "Nisi nisi magna nostrud non consequat conse ?",
    text: "Ullamco enim ut culpa irure non qui est duis et aute proident reprehenderit tempor mollit. Aliquip excepteur nisi culpa reprehenderit adipisicing aliquip excepteur nulla minim.",
  },
  {
    title: "Nisi nisi magna nostrud non consequat conse ?",
    text: "Ullamco enim ut culpa irure non qui est duis et aute proident reprehenderit tempor mollit. Aliquip excepteur nisi culpa reprehenderit adipisicing aliquip excepteur nulla minim.",
  },
  {
    title:
      "Nisi nisi magna nostrud non consequat consemagna nostrud non consequat consemagna nostrud non consequat conse ?",
    text: "Ullamco enim ut culpa irure non qui est duis et aute proident reprehenderit tempor ut culpa irure non qui est duis et aute proident reprehenderitut culpa irure non qui est duis et aute proident reprehenderitut culpa irure non qui est duis et aute proident reprehenderitmollit. Aliquip excepteur nisi culpa reprehenderit adipisicing aliquip excepteur nulla minim.",
  },
  {
    title: "Nisi nisi magna nostrud non consequat conse ?",
    text: "Ullamco enim ut culpa irure non qui est duis et aute proident reprehenderit tempor mollit. Aliquip excepteurut culpa irure non qui est duis et aute proident reprehenderitut culpa irure non qui est duis et aute proident reprehenderitut culpa irure non qui est duis et aute proident reprehenderit nisi culpa reprehenderit adipisicing aliquip excepteur nulla minim.",
  },
  {
    title: "Nisi nisi magna nostrud non consequat conse ?",
    text: "Ullamco enim ut culpa irure non qui est duis et aute proident reprehenderit tempor mollit. Aliquip excepteur nisi culpa reprehenderit adipisicing aliquip excepteur nulla minim.",
  },
  {
    title: "Nisi nisi magna nostrud non consequat conse ?",
    text: "Ullamco enim ut culpa irure non qui est duis et aute proident reprehenderitut culpa irure non qui est duis et aute proident reprehenderitut culpa irure non qui est duis et aute proident reprehenderit tempor mollit. Aliquip excepteur nisi culpa reprehenderit adipisicing aliquip excepteur nulla minim.",
  },
  {
    title:
      "Nisi nisi magnamagna nostrud non consequat conse nostrud non consequat conse ?",
    text: "Ullamco enim ut culpa irure non qui est duis et aute proident reprehenderit tempor mollit. Aliquip excepteur ut culpa irure non qui est duis et aute proident reprehenderitnisi culpa reprehenderit adipisicing aliquip excepteur nulla minim.",
  },
  {
    title:
      "Nisi nisimagna nostrud non consequat consemagna nostrud non consequat conse magna nostrud non consequat conse ?",
    text: "Ullamco enim ut culpa irure non qui est duis et aute proident reprehenderit tempor mollit. Aliquip excepteur nisi culpa reprehenderit adipisicing aliquip excepteur nulla minim.",
  },
];
