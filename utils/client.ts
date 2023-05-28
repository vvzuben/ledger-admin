import axios from 'axios';

interface ICall {
  <RES>(call: string, data: any, opts?: { token?: string }): Promise<RES>;
}

const handleCall: ICall = async (call, data, opts) => {
  const tokenOverride = opts?.token;
  const tokenFromStorage =
    typeof localStorage !== 'undefined' ? localStorage.getItem('token') : null;
  const tokenFromConfig = process.env.STARLEDGER_AUTH_TOKEN!;
  const token = tokenOverride
    ? tokenOverride
    : tokenFromStorage
    ? tokenFromStorage
    : tokenFromConfig;

  try {
    const request = await axios({
      method: 'POST',
      headers:
        opts?.token || token
          ? {
              Authorization: `Bearer ${token}`,
            }
          : undefined,
      url: `${process.env.STARLEDGER_API_URL}/${call}`,
      data,
    });

    return request.data;
  } catch (error: any) {
    // if ((error as any)) {
    //   throw new Error((error as any));
    // }
    throw error.response;
  }
};

const createErrorLog = (
  data?: { code: string; message: string; notes: string },
  opts?: { token?: string },
) => handleCall<{}>('createErrorLog', data, opts);

const createNewsArticle = (
  data?: {
    slug: string;
    image?: string;
    title: string;
    content?: string;
    overview?: string;
    publishedAt?: string;
    status?: 'draft' | 'published';
    categoryIds?: string[];
  },
  opts?: { token?: string },
) =>
  handleCall<{
    id: string;
    slug: string;
    image: string;
    title: string;
    content: string;
    overview: string;
    publishedAt: string;
    status: string;
    categoryIds: string[];
  }>('createNewsArticle', data, opts);

const createNewsCategory = (
  data?: { slug: string; title: string },
  opts?: { token?: string },
) =>
  handleCall<{
    id: string;
    slug: string;
    title: string;
    status: string;
    authorUserId: string;
  }>('createNewsCategory', data, opts);

const createNotification = (
  data?: { title: string; message?: string },
  opts?: { token?: string },
) =>
  handleCall<{
    id: string;
    title: string;
    message: string;
    authorUserId: string;
  }>('createNotification', data, opts);

const createSpaceObject = (
  data?: { title: string; message?: string },
  opts?: { token?: string },
) =>
  handleCall<{
    identifier: string;
    hip?: number;
    name: string;
    constellation: string;
    overview?: string;
    description?: string;
    rightAscension: string;
    declination: string;
    type: string;
  }>('createSpaceObject', data, opts);

const createTriviaGame = (
  data?: {
    date: string;
    title: string;
    questions: { question: string; answers: string[] }[];
  },
  opts?: { token?: string },
) =>
  handleCall<{
    id: string;
    date: string;
    title: string;
    status: string;
    authorUserId: string;
  }>('createTriviaGame', data, opts);

const deleteActivity = (data?: { id: string }, opts?: { token?: string }) =>
  handleCall<{}>('deleteActivity', data, opts);

const deleteNewsArticle = (data?: { id: string }, opts?: { token?: string }) =>
  handleCall<{}>('deleteNewsArticle', data, opts);

const deleteNewsCategory = (data?: { id: string }, opts?: { token?: string }) =>
  handleCall<{}>('deleteNewsCategory', data, opts);

const deleteNotification = (data?: { id: string }, opts?: { token?: string }) =>
  handleCall<{}>('deleteNotification', data, opts);

const deleteSpaceObject = (data?: { id: string }, opts?: { token?: string }) =>
  handleCall<{}>('deleteSpaceObject', data, opts);

const deleteTriviaGame = (data?: { id: string }, opts?: { token?: string }) =>
  handleCall<{}>('deleteTriviaGame', data, opts);

const getNewsArticle = (data?: { slug: string | string[] | undefined }, opts?: { token?: string }) =>
  handleCall<{
    id: string;
    slug: string;
    image: string;
    title: string;
    overview: string;
    content: string;
    publishedAt: string;
    status: string;
  }>('getNewsArticle', data, opts);

const getNewsCategory = (data?: { slug: string | string[] | undefined }, opts?: { token?: string }) =>
  handleCall<{ id: string; slug: string; title: string; authorUserId: string }>(
    'getNewsCategory',
    data,
    opts,
  );

const getNft = (data?: { hip: number | string | string[] | undefined }, opts?: { token?: string }) =>
  handleCall<{ tokenId: number }>('getNft', data, opts);

const getNotification = (data?: { id: string }, opts?: { token?: string }) =>
  handleCall<{ id: string; title: string; message: string; isUnread: boolean }>(
    'getNotification',
    data,
    opts,
  );

const getProfile = (data?: {}, opts?: { token?: string }) =>
  handleCall<{ email: string; discord: string; telegram: string }>(
    'getProfile',
    data,
    opts,
  );

const getSetting = (data?: { key: string }, opts?: { token?: string }) =>
  handleCall<{ key: string; value: string }>('getSetting', data, opts);

const getSpaceObject = (data?: { id: string }, opts?: { token?: string }) =>
  handleCall<{
    id: string;
    identifier: string;
    hip: number;
    name: string;
    constellation: string;
    overview: string;
    rightAscension: string;
    declination: string;
    type: string;
    facts: string[];
  }>('getSpaceObject', data, opts);

const getTriviaGame = (data?: { id: string }, opts?: { token?: string }) =>
  handleCall<{
    id: string;
    title: string;
    date: string;
    status: string;
    questions: { id: string; question: string; answers: string[] }[];
  }>('getTriviaGame', data, opts);

const listActivities = (
  data?: { filter?: {}; page?: number; limit?: number },
  opts?: { token?: string },
) =>
  handleCall<{
    maxCount: number;
    maxPages: number;
    results: {
      status: any;
      id: string;
      slug: string;
      image: string;
      title: string;
      overview: string;
      publishedAt: string;
    }[];
  }>('listActivities', data, opts);

const listNewsArticles = (
  data?: { filter?: { categoryIds?: string[] }; page?: number; limit?: number },
  opts?: { token?: string },
) =>
  handleCall<{
    maxCount: number;
    maxPages: number;
    results: {
      id: string;
      slug: string;
      image: string;
      title: string;
      overview: string;
      publishedAt: string;
    }[];
  }>('listNewsArticles', data, opts);

const listNewsCategories = (
  data?: { filter?: {}; page?: number; limit?: number },
  opts?: { token?: string },
) =>
  handleCall<{
    maxCount: number;
    maxPages: number;
    results: {
      id: string;
      slug: string;
      title: string;
      status: string;
      authorUserId: string;
    }[];
  }>('listNewsCategories', data, opts);

const listNfts = (
  data?: { filter?: {}; page?: number; limit?: number },
  opts?: { token?: string },
) =>
  handleCall<{
    maxCount: number;
    maxPages: number;
    results: {
      hip: number;
      constellation: string;
      coordinates: string;
      ranking: number;
      rarity: string;
      name: string;
      tokenId: number;
    }[];
  }>('listNfts', data, opts);

const listNotifications = (
  data?: { filter?: {}; page?: number; limit?: number },
  opts?: { token?: string },
) =>
  handleCall<{
    maxCount: number;
    maxPages: number;
    results: {
      id: string;
      title: string;
      message: string;
      isUnread: boolean;
    }[];
  }>('listNotifications', data, opts);

const listOwnedTokens = (
  data?: { filter?: {}; page?: number; limit?: number },
  opts?: { token?: string },
) =>
  handleCall<{
    maxCount: number;
    maxPages: number;
    results: {
      hip: number;
      constellation: string;
      coordinates: string;
      ranking: number;
      rarity: string;
      name: string;
      tokenId: number;
    }[];
  }>('listOwnedTokens', data, opts);

const listSpaceObjects = (
  data?: { filter?: {}; page?: number; limit?: number },
  opts?: { token?: string },
) =>
  handleCall<{
    maxCount: number;
    maxPages: number;
    results: {
      identifier: string;
      hip?: number;
      name: string;
      constellation: string;
      overview?: string;
      description?: string;
      rightAscension: string;
      declination: string;
      type: string;
    }[];
  }>('listSpaceObjects', data, opts);

const listTriviaGames = (
  data?: { filter?: {}; page?: number; limit?: number },
  opts?: { token?: string },
) =>
  handleCall<{
    maxCount: number;
    maxPages: number;
    results: { id: string; title: string; date: string; status: string }[];
  }>('listTriviaGames', data, opts);

const loginWithEmail = (
  data?: { email: string; password: string },
  opts?: { token?: string },
) =>
  handleCall<{ expiresIn: number; token: string }>(
    'loginWithEmail',
    data,
    opts,
  );

const loginWithWallet = (
  data?: { address: string; signature: string },
  opts?: { token?: string },
) =>
  handleCall<{ expiresIn: number; token: string }>(
    'loginWithWallet',
    data,
    opts,
  );

const registerWithEmail = (
  data?: { email: string; password: string },
  opts?: { token?: string },
) => handleCall<{ id: string }>('registerWithEmail', data, opts);

const search = (data?: { query: string }, opts?: { token?: string }) =>
  handleCall<{ results: { hip: number; name: string }[] }>(
    'search',
    data,
    opts,
  );

const updateNewsArticle = (
  data?: {
    id: string;
    slug?: string;
    image?: string;
    title?: string;
    content?: string;
    overview?: string;
    publishedAt?: string;
    status?: 'draft' | 'published';
  },
  opts?: { token?: string },
) =>
  handleCall<{
    id: string;
    slug: string;
    image: string;
    title: string;
    overview: string;
    content: string;
    publishedAt: string;
    status: string;
  }>('updateNewsArticle', data, opts);

const updateNewsCategory = (
  data?: { id: string; slug?: string; title?: string },
  opts?: { token?: string },
) =>
  handleCall<{
    id: string;
    slug: string;
    title: string;
    status: string;
    authorUserId: string;
  }>('updateNewsCategory', data, opts);

const updateNotification = (
  data?: { id: string; title?: string; message?: string },
  opts?: { token?: string },
) =>
  handleCall<{
    id: string;
    title: string;
    message: string;
    authorUserId: string;
    recipientUserIds: string[];
  }>('updateNotification', data, opts);

const updateProfile = (
  data?: { email?: string; discord?: string; telegram?: string },
  opts?: { token?: string },
) => handleCall<{}>('updateProfile', data, opts);

const updateSpaceObject = (
  data?: {
    id: string;
    identifier?: string;
    hip?: number;
    name?: string;
    constellation?: string;
    overview?: string;
    description?: string;
    rightAscension?: string;
    declination?: string;
    type?: string;
  },
  opts?: { token?: string },
) => handleCall<{}>('updateSpaceObject', data, opts);

const updateTriviaGame = (
  data?: {
    id?: string;
    date?: string;
    title?: string;
    status?: 'draft' | 'live' | 'ended';
  },
  opts?: { token?: string },
) => handleCall<{ id: string }>('updateTriviaGame', data, opts);

export const client = {
  createErrorLog,
  createNewsArticle,
  createNewsCategory,
  createNotification,
  createSpaceObject,
  createTriviaGame,
  deleteActivity,
  deleteNewsArticle,
  deleteNewsCategory,
  deleteNotification,
  deleteSpaceObject,
  deleteTriviaGame,
  getNewsArticle,
  getNewsCategory,
  getNft,
  getNotification,
  getProfile,
  getSetting,
  getSpaceObject,
  getTriviaGame,
  listActivities,
  listNewsArticles,
  listNewsCategories,
  listNfts,
  listNotifications,
  listOwnedTokens,
  listSpaceObjects,
  listTriviaGames,
  loginWithEmail,
  loginWithWallet,
  registerWithEmail,
  search,
  updateNewsArticle,
  updateNewsCategory,
  updateNotification,
  updateProfile,
  updateSpaceObject,
  updateTriviaGame,
};
