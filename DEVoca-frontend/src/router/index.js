import { createRouter, createWebHistory } from 'vue-router'
import LoginView from '@/views/MembershipManagement/LoginView.vue'
import SignupView from '@/views/MembershipManagement/SignupView.vue'
import SelectInterestsView from '@/views/MembershipManagement/SelectInterestsView.vue'
import FollowView from '@/views/Mypage/FollowView.vue'
import FollowRecommendationView from '@/views/MembershipManagement/FollowRecommendationView.vue'
import OtherUserProfileView from '@/views/DM/OtherUserProfileView.vue'
import DMMessageView from '@/views/DM/DMMessageView.vue'
import MainView from '@/views/feed/MainView.vue'
import DMListView from '@/views/DM/DMListView.vue'
import MypageView from '@/views/Mypage/MypageView.vue'
import MyBadgeView from '@/views/Mypage/MyBadgeView.vue'
import MyBoardView from '@/views/Mypage/MyBoardView.vue'
import MyCardView from '@/views/Mypage/MyCardView.vue'
import MyCommentView from '@/views/Mypage/MyCommentView.vue'
import ProfileChangeView from '@/views/Mypage/ProfileChangeView.vue'
import MypageSettingView from '@/views/Mypage/MypageSettingView.vue'
import SelectInterestsChangeView from '@/views/Mypage/SelectInterestsChangeView.vue'
import PasswordChangeView from '@/views/Mypage/PasswordChangeView.vue'
import AlarmPageView from '@/views/feed/AlarmPageView.vue'
import FeedListView from '@/views/feed/FeedListView.vue'
import CardCreateView from '@/views/card/CardCreateView.vue'
import CardDetailView from '@/views/card/CardDetailView.vue'
import WordListView from '@/views/word/WordListView.vue'
import WordDetailView from '@/views/word/WordDetailView.vue'
import SearchView from '@/views/search/SearchView.vue'
import SearchResultView from '@/views/search/SearchResultView.vue'
import ArticleCreateView from '@/views/article/ArticleCreateView.vue'
import ArticleView from '@/views/article/ArticleView.vue'
import ArticleDetailView from '@/views/article/ArticleDetailView.vue'
import VocalistListView from '@/views/vocalist/VocalistListView.vue'
import QuizListView from '@/views/Quiz/QuizListView.vue'
import QuizDetailView from '@/views/Quiz/QuizDetailView.vue'
import KaKaoRedirectView from '@/views/system/KaKaoRedirectView.vue'
import QuizPageView from '@/views/Quiz/QuizPageView.vue'
import RouterErrorView from '@/views/system/RouterErrorView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    // 전체화면
    {
      path: '/login',
      name: 'LoginView',
      component: LoginView
    },
    {
      path:'/signup',
      name:'SignupView',
      component : SignupView
    },
    {
      path: '/selectinterests',
      name: 'SelectInterestsView',
      component : SelectInterestsView
    },
    {
      path : '/followrecommendation',
      name : 'FollowRecommendationView',
      component : FollowRecommendationView
    },
    //DM
    {
      path : '/dmmessage/:roomUuid',
      name : 'DMMessageView',
      component : DMMessageView,
      props: true
    },
    // 상하단바
    {
      path: '/',
      name: 'MainView',
      component: MainView,
      redirect: {name: 'FeedListView'},
      children: [
        //DM
        {
          path : '/dmlist/:id',
          name : 'DMListView',
          component : DMListView
        },
        {
          path : '/profile/:id',
          name : 'OtherUserProfileView',
          component : OtherUserProfileView
        },
        //mypage
        {
          path : '/mypage',
          name : 'MypageView',
          component : MypageView
        },
        {
          path : '/mybadge',
          name : 'MyBadgeView',
          component : MyBadgeView
        },
        {
          path : '/mycard',
          name : 'MyCardView',
          component : MyCardView
        },
        {
          path : '/myboard',
          name : 'MyBoardView',
          component : MyBoardView
        },
        {
          path: '/follow/:option',
          name : 'FollowView',
          component : FollowView
        },
        {
          path : '/mycomment',
          name : 'MyCommentView',
          component : MyCommentView
        },
        {
          path : '/profilechange/:id',
          name : 'ProfileChangeView',
          component : ProfileChangeView
        },
        {
          path : '/mypagesetting/:id',
          name : 'MypageSettingView',
          component : MypageSettingView
        },
        {
          path : '/selecinterestschange',
          name : 'SelectInterestsChangeView',
          component : SelectInterestsChangeView
        },
        {
          path : '/passwordchange',
          name : 'PasswordChangeView',
          component : PasswordChangeView
        },
        {
          path : '/alarm/:id',
          name : 'AlarmPageView',
          component : AlarmPageView
        },
        // feed
        {
          path: '/main',
          name: 'FeedListView',
          component: FeedListView,
        },
        {
          path: '/card/create',
          name: 'CardCreateView',
          component: CardCreateView,
        },
        {
          path: '/card/detail/:id',
          name: 'CardDetailView',
          component: CardDetailView,
          props: true
        },
        // word
        {
          path: '/word/list',
          name: 'WordListView',
          component: WordListView,
        },
        {
          path: '/word/detail/:id',
          name: 'WordDetailView',
          component: WordDetailView,
          props: true,
        },
        //search
        {
          path: '/search',
          name: 'SearchView',
          component: SearchView,
        },
        {
          path: '/search/result',
          name: 'SearchResultView',
          component: SearchResultView,
        },
        // article
        {
          path: '/article/create',
          name: 'ArticleCreateView',
          component: ArticleCreateView,
        },
        {
          path : '/article/view',
          name : 'ArticleView',
          component : ArticleView
        },
        {
          path : '/article/detail',
          name : 'ArticleDetailView',
          component : ArticleDetailView
        },
        // vocalist
        {
          path: '/vocalist',
          name: 'VocalistListView',
          component: VocalistListView,
        },
        // quiz
        {
          path: '/quizpage',
          name: 'QuizPageView',
          component: QuizPageView,
          redirect: '/quizpage/0',
          children: [
            {
              path: ":index",
              name: "QuizPageComponent",
              component: () => import("@/components/quiz/QuizPageComponent.vue"),
              props: true,
            },
          ]
        },
        {
          path : '/quizlist',
          name : 'QuizListView',
          component : QuizListView,
        },
        {
          path : '/quizdetail',
          name : 'QuizDetailView',
          component : QuizDetailView,
        },
      ]
    },
    {
      path: '/kakao/callback',
      component: KaKaoRedirectView,
    },
    {
      path: '/:pathMatch(.*)*',
      component: RouterErrorView,
    },
  ]
})

export default router
