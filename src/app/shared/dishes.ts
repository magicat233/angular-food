import { Dish } from './dish';

export const DISHES : Dish[] = [
    {​
      id: '0',​
      name: 'kiwi',​
      image: '/assets/images/kiwi.png',​
      category: 'mains',​
      featured: true,​
      label: 'Hot',​
      price: '4.99',​
      // tslint:disable-next-line:max-line-length​
      description: 'A unique combination of Indian Uthappam (pancake) and Italian pizza, topped with Cerignola olives, ripe vine cherry tomatoes, Vidalia onion, Guntur chillies and Buffalo Paneer.'​,
      comments: [
        {
          rating: 5,
          comment: "kiwi is a good friut",
          author: "efgao",
          date: "2020-02-19"
        },
        {
          rating: 4,
          comment: "kiwi is also a kind of animal",
          author: "efgao",
          date: "2020-02-19"
        },
        {
          rating: 4,
          comment: "eat it, just eat it",
          author: "efgao",
          date: "2020-02-20"
        }
      ]
    },​
    {​
      id: '1',​
      name: 'apple',​
      image: '/assets/images/apple.png',​
      category: 'appetizer',​
      featured: false,​
      label: '',​
      price: '1.99',​
      description: 'Deep fried Zucchini coated with mildly spiced Chickpea flour batter accompanied with a sweet-tangy tamarind sauce'​,
      comments: [
        {
          rating: 5,
          comment: "apple is a good friut",
          author: "efgao",
          date: "2020-02-19"
        },
        {
          rating: 4,
          comment: "apple is also a kind of animal",
          author: "efgao",
          date: "2020-02-19"
        },
        {
          rating: 4,
          comment: "eat it, just eat it",
          author: "efgao",
          date: "2020-02-20"
        }
      ]
    },​
    {​
      id: '2',​
      name: 'fish',​
      image: '/assets/images/fish.png',​
      category: 'appetizer',​
      featured: false,​
      label: 'New',​
      price: '1.99',​
      description: 'A quintessential ConFusion experience, is it a vada or is it a donut?'​,
      comments: [
        {
          rating: 5,
          comment: "fish is a good friut",
          author: "efgao",
          date: "2020-02-19"
        },
        {
          rating: 4,
          comment: "fish is also a kind of animal",
          author: "efgao",
          date: "2020-02-19"
        },
        {
          rating: 4,
          comment: "eat it, just eat it",
          author: "efgao",
          date: "2020-02-20"
        }
      ]
    },​
    {​
      id: '3',​
      name: 'milk',​
      image: '/assets/images/milk.png',​
      category: 'dessert',​
      featured: false,​
      label: '',​
      price: '2.99',​
      description: 'A delectable, semi-sweet New York Style Cheese Cake, with Graham cracker crust and spiced with Indian cardamoms'​,
      comments: [
        {
          rating: 5,
          comment: "milk is a good friut",
          author: "efgao",
          date: "2020-02-19"
        },
        {
          rating: 4,
          comment: "milk is also a kind of animal",
          author: "efgao",
          date: "2020-02-19"
        },
        {
          rating: 4,
          comment: "eat it, just eat it",
          author: "efgao",
          date: "2020-02-20"
        }
      ]
    }​
   ];