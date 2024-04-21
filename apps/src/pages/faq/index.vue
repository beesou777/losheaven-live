<template>
  <div class="h-full">
    <section class="max-w-5xl mx-auto py-10 sm:py-20">
      <div class="flex items-center justify-center flex-col gap-y-2 py-5">
        <h2 class="text-2xl md:text-3xl lg:text-4xl font-bold">Frequently asked questions</h2>
        <p class="text-lg font-medium text-slate-700/70">Questions related to losheaven clothing</p>
      </div>
      <div class="w-full px-7 md:px-10 xl:px-2 py-4">
        <div class="mx-auto w-full max-w-5xl border border-slate-400/20 rounded-lg bg-white">
          <div v-for="(faq, index) in faqData" :key="index" class="border-b border-[#0A071B]/10">
            <button
              @click="toggleAnswer(index)"
              class="question-btn flex w-full items-start gap-x-5 justify-between rounded-lg text-left text-lg font-bold text-slate-800 focus:outline-none p-5"
              :data-toggle="'answer-' + (index + 1)"
            >
              <span>{{ faq.question }}</span>
              <svg
                :class="{ 'rotate-180': activeIndex === index }"
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 24 24"
                class="mt-1.5 md:mt-0 flex-shrink-0 transform h-5 w-5 text-[#5B5675]"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M16.293 9.293 12 13.586 7.707 9.293l-1.414 1.414L12 16.414l5.707-5.707z"></path>
              </svg>
            </button>
            <div
              :id="'answer-' + (index + 1)"
              class="answer pt-2 pb-5 px-5 text-sm lg:text-base text-[#343E3A] font-medium"
              v-show="activeIndex === index"
            >
              {{ faq.answer }}
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';

const faqData = ref([
  {
    question: 'What inspired the creation of Losheaven and its slogan, "Trust the Process"?',
    answer:
      'The inspiration for Losheaven and its slogan, "Trust the Process," came from a nostalgic reflection on memories shared in Mendies Heaven. These memories of togetherness contrasted with the feeling of distance as everyone pursued their individual paths. Losheaven emerged from the desire to reunite people and create a sense of belonging.',
  },
  {
    question: 'What sets Losheaven apart from other clothing brands?',
    answer:
      'Losheaven stands out by prioritizing customer trust and satisfaction, offering versatile garments suitable for all body types. Our focus on the process of creation ensures each piece embodies quality and authenticity, providing a unique experience for our customers.',
  },
  {
    question: "Describe the style and feel of Losheaven's clothing line.",
    answer:
      "Losheaven's clothing line exudes a summer vibe, crafted from comfortable and flexible Thai cotton terry. Our pieces are not only stylish but also eco-friendly, reflecting our commitment to sustainability.",
  },
  {
    question: 'Where does Losheaven source its materials for clothing production?',
    answer:
      'Losheaven partners with Versino Garments, renowned for providing high-quality materials. Currently, we use Thai cotton terry, known for its comfort and eco-friendliness, ensuring our garments meet the highest standards.',
  },
  {
    question: 'How does Losheaven ensure the quality of its garments?',
    answer:
      'Losheaven maintains strict quality control measures, guaranteeing that each garment meets our standards of excellence. Our dedication to customer satisfaction extends to a hassle-free 7-day return policy for items in their original condition.',
  },
  {
    question: 'Does Losheaven offer sustainable clothing options?',
    answer:
      'Yes, Losheaven is committed to sustainability, using eco-friendly materials and ethical sourcing practices. Our garments are not only stylish but also environmentally responsible.',
  },
  {
    question: "What sizes are available in Losheaven's clothing range?",
    answer:
      "Losheaven's clothing sizes are inclusive and suitable for all body types, ensuring that everyone can find their perfect fit and feel confident in our garments.",
  },
  {
    question: 'How does Losheaven involve its customers in the brand experience?',
    answer:
      'Losheaven offers opportunities for individuals to become part of our community, whether through sharing our products as brand ambassadors or participating in collaborative projects.',
  },
  {
    question: 'How can customers stay updated on promotions and new releases from Losheaven?',
    answer:
      'Customers can follow us on Instagram for updates on promotions, new releases, and behind-the-scenes insights.',
  },
  {
    question: "What opportunities does Losheaven provide for individuals interested in joining the brand's community?",
    answer:
      'Losheaven offers various opportunities for individuals to become part of our community, including dropshipping, where they can earn rewards by sharing our quality products.',
  },
]);

let activeIndex = ref(null);

function toggleAnswer(index: number) {
  activeIndex.value = activeIndex.value === index ? null : index;
}

useSchemaOrg([
  {
    '@type': 'FAQPage',
    mainEntity: faqData.value.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  },
]);
</script>
