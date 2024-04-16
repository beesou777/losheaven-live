import { defineStore } from 'pinia';

const axios = useApi();
export const useReviewStore = defineStore('review', {
  state: () => ({
    reviews: null,
    isLoading: false,
  }),
  actions: {
    async createReviews(data: any) {
      try {
        this.isLoading = true;
        const response = await axios.post(
          'reviews/create-review',
          {
            reviews: data.reviews,
            heading: data.heading,
            comment: data.comment,
          },
          {
            headers: {
              Authorization: `Bearer ${useCookie('customer-access').value}`,
            },
          },
        );
        return response;
      } catch (error) {
        console.log(error);
      } finally {
        this.isLoading = false;
      }
    },
    async getCart() {
      try {
        this.isLoading = true;
        const response = await axios.get('reviews/get-reviews');
        this.reviews = response.data[0];
      } catch (error) {
        console.log(error);
      } finally {
        this.isLoading = false;
      }
    },
  },
});
