# starledger-admin

## Client

### Available Calls:

- createErrorLog
- createNewsArticle
- createNewsCategory
- createNotification
- createSpaceObject
- createTriviaGame
- deleteActivity
- deleteNewsArticle
- deleteNewsCategory
- deleteNotification
- deleteSpaceObject
- deleteTriviaGame
- getNewsArticle
- getNewsCategory
- getNft
- getNotification
- getProfile
- getSetting
- getSpaceObject
- getTriviaGame
- listActivities
- listNewsArticles
- listNewsCategories
- listNfts
- listNotifications
- listOwnedTokens
- listSpaceObjects
- listTriviaGames
- loginWithEmail
- loginWithWallet
- registerWithEmail
- search
- updateNewsArticle
- updateNewsCategory
- updateNotification
- updateProfile
- updateSpaceObject
- updateTriviaGame

### createErrorLog

**Request**

<table>
	<tr><td>code</td><td>Required</td><td>string</td></tr>
	<tr><td>message</td><td>Required</td><td>string</td></tr>
	<tr><td>notes</td><td>Required</td><td>string</td></tr>
</table>

**Response**

<table>

</table>

### createNewsArticle

**Request**

<table>
	<tr><td>slug</td><td>Required</td><td>string</td></tr>
	<tr><td>image</td><td>Optional</td><td>string</td></tr>
	<tr><td>title</td><td>Required</td><td>string</td></tr>
	<tr><td>content</td><td>Optional</td><td>string</td></tr>
	<tr><td>overview</td><td>Optional</td><td>string</td></tr>
	<tr><td>publishedAt</td><td>Optional</td><td>string</td></tr>
	<tr><td>status</td><td>Optional</td><td>draft | published</td></tr>
	<tr><td>categoryIds</td><td>Optional</td><td>string[]</td></tr>
</table>

**Response**

<table>
	<tr><td>id</td><td>Required</td><td>string</td></tr>
	<tr><td>slug</td><td>Required</td><td>string</td></tr>
	<tr><td>image</td><td>Required</td><td>string</td></tr>
	<tr><td>title</td><td>Required</td><td>string</td></tr>
	<tr><td>content</td><td>Required</td><td>string</td></tr>
	<tr><td>overview</td><td>Required</td><td>string</td></tr>
	<tr><td>publishedAt</td><td>Required</td><td>string</td></tr>
	<tr><td>status</td><td>Required</td><td>string</td></tr>
	<tr><td>categoryIds</td><td>Required</td><td>string[]</td></tr>
</table>

### createNewsCategory

**Request**

<table>
	<tr><td>slug</td><td>Required</td><td>string</td></tr>
	<tr><td>title</td><td>Required</td><td>string</td></tr>
</table>

**Response**

<table>
	<tr><td>id</td><td>Required</td><td>string</td></tr>
	<tr><td>slug</td><td>Required</td><td>string</td></tr>
	<tr><td>title</td><td>Required</td><td>string</td></tr>
	<tr><td>status</td><td>Required</td><td>string</td></tr>
	<tr><td>authorUserId</td><td>Required</td><td>string</td></tr>
</table>

### createNotification

**Request**

<table>
	<tr><td>title</td><td>Required</td><td>string</td></tr>
	<tr><td>message</td><td>Optional</td><td>string</td></tr>
</table>

**Response**

<table>
	<tr><td>id</td><td>Required</td><td>string</td></tr>
	<tr><td>title</td><td>Required</td><td>string</td></tr>
	<tr><td>message</td><td>Required</td><td>string</td></tr>
	<tr><td>authorUserId</td><td>Required</td><td>string</td></tr>
</table>

### createSpaceObject

**Request**

<table>
	<tr><td>title</td><td>Required</td><td>string</td></tr>
	<tr><td>message</td><td>Optional</td><td>string</td></tr>
</table>

**Response**

<table>
	<tr><td>identifier</td><td>Required</td><td>string</td></tr>
	<tr><td>hip</td><td>Optional</td><td>number</td></tr>
	<tr><td>name</td><td>Required</td><td>string</td></tr>
	<tr><td>constellation</td><td>Required</td><td>string</td></tr>
	<tr><td>overview</td><td>Optional</td><td>string</td></tr>
	<tr><td>description</td><td>Optional</td><td>string</td></tr>
	<tr><td>rightAscension</td><td>Required</td><td>string</td></tr>
	<tr><td>declination</td><td>Required</td><td>string</td></tr>
	<tr><td>type</td><td>Required</td><td>string</td></tr>
</table>

### createTriviaGame

**Request**

<table>
	<tr><td>date</td><td>Required</td><td>string</td></tr>
	<tr><td>title</td><td>Required</td><td>string</td></tr>
	<tr><td>questions</td><td>Required</td><td>	<tr><td>question</td><td>Required</td><td>string</td></tr>
	<tr><td>answers</td><td>Required</td><td>string[]</td></tr>[]</td></tr>
</table>

**Response**

<table>
	<tr><td>id</td><td>Required</td><td>string</td></tr>
	<tr><td>date</td><td>Required</td><td>string</td></tr>
	<tr><td>title</td><td>Required</td><td>string</td></tr>
	<tr><td>status</td><td>Required</td><td>string</td></tr>
	<tr><td>authorUserId</td><td>Required</td><td>string</td></tr>
</table>

### deleteActivity

**Request**

<table>
	<tr><td>id</td><td>Required</td><td>string</td></tr>
</table>

**Response**

<table>

</table>

### deleteNewsArticle

**Request**

<table>
	<tr><td>id</td><td>Required</td><td>string</td></tr>
</table>

**Response**

<table>

</table>

### deleteNewsCategory

**Request**

<table>
	<tr><td>id</td><td>Required</td><td>string</td></tr>
</table>

**Response**

<table>

</table>

### deleteNotification

**Request**

<table>
	<tr><td>id</td><td>Required</td><td>string</td></tr>
</table>

**Response**

<table>

</table>

### deleteSpaceObject

**Request**

<table>
	<tr><td>id</td><td>Required</td><td>string</td></tr>
</table>

**Response**

<table>

</table>

### deleteTriviaGame

**Request**

<table>
	<tr><td>id</td><td>Required</td><td>string</td></tr>
</table>

**Response**

<table>

</table>

### getNewsArticle

**Request**

<table>
	<tr><td>slug</td><td>Required</td><td>string</td></tr>
</table>

**Response**

<table>
	<tr><td>id</td><td>Required</td><td>string</td></tr>
	<tr><td>slug</td><td>Required</td><td>string</td></tr>
	<tr><td>image</td><td>Required</td><td>string</td></tr>
	<tr><td>title</td><td>Required</td><td>string</td></tr>
	<tr><td>overview</td><td>Required</td><td>string</td></tr>
	<tr><td>content</td><td>Required</td><td>string</td></tr>
	<tr><td>publishedAt</td><td>Required</td><td>string</td></tr>
	<tr><td>status</td><td>Required</td><td>string</td></tr>
</table>

### getNewsCategory

**Request**

<table>
	<tr><td>slug</td><td>Required</td><td>string</td></tr>
</table>

**Response**

<table>
	<tr><td>id</td><td>Required</td><td>string</td></tr>
	<tr><td>slug</td><td>Required</td><td>string</td></tr>
	<tr><td>title</td><td>Required</td><td>string</td></tr>
	<tr><td>authorUserId</td><td>Required</td><td>string</td></tr>
</table>

### getNft

**Request**

<table>
	<tr><td>hip</td><td>Required</td><td>number</td></tr>
</table>

**Response**

<table>
	<tr><td>tokenId</td><td>Required</td><td>number</td></tr>
</table>

### getNotification

**Request**

<table>
	<tr><td>id</td><td>Required</td><td>string</td></tr>
</table>

**Response**

<table>
	<tr><td>id</td><td>Required</td><td>string</td></tr>
	<tr><td>title</td><td>Required</td><td>string</td></tr>
	<tr><td>message</td><td>Required</td><td>string</td></tr>
	<tr><td>isUnread</td><td>Required</td><td>boolean</td></tr>
</table>

### getProfile

**Request**

<table>

</table>

**Response**

<table>
	<tr><td>email</td><td>Required</td><td>string</td></tr>
	<tr><td>discord</td><td>Required</td><td>string</td></tr>
	<tr><td>telegram</td><td>Required</td><td>string</td></tr>
</table>

### getSetting

**Request**

<table>
	<tr><td>key</td><td>Required</td><td>string</td></tr>
</table>

**Response**

<table>
	<tr><td>key</td><td>Required</td><td>string</td></tr>
	<tr><td>value</td><td>Required</td><td>string</td></tr>
</table>

### getSpaceObject

**Request**

<table>
	<tr><td>id</td><td>Required</td><td>string</td></tr>
</table>

**Response**

<table>
	<tr><td>id</td><td>Required</td><td>string</td></tr>
	<tr><td>identifier</td><td>Required</td><td>string</td></tr>
	<tr><td>hip</td><td>Required</td><td>number</td></tr>
	<tr><td>name</td><td>Required</td><td>string</td></tr>
	<tr><td>constellation</td><td>Required</td><td>string</td></tr>
	<tr><td>overview</td><td>Required</td><td>string</td></tr>
	<tr><td>rightAscension</td><td>Required</td><td>string</td></tr>
	<tr><td>declination</td><td>Required</td><td>string</td></tr>
	<tr><td>type</td><td>Required</td><td>string</td></tr>
	<tr><td>facts</td><td>Required</td><td>string[]</td></tr>
</table>

### getTriviaGame

**Request**

<table>
	<tr><td>id</td><td>Required</td><td>string</td></tr>
</table>

**Response**

<table>
	<tr><td>id</td><td>Required</td><td>string</td></tr>
	<tr><td>title</td><td>Required</td><td>string</td></tr>
	<tr><td>date</td><td>Required</td><td>string</td></tr>
	<tr><td>status</td><td>Required</td><td>string</td></tr>
	<tr><td>questions</td><td>Required</td><td>	<tr><td>id</td><td>Required</td><td>string</td></tr>
	<tr><td>question</td><td>Required</td><td>string</td></tr>
	<tr><td>answers</td><td>Required</td><td>string[]</td></tr>[]</td></tr>
</table>

### listActivities

**Request**

<table>
	<tr><td>filter</td><td>Optional</td></tr>
	<tr><td>page</td><td>Optional</td><td>number</td></tr>
	<tr><td>limit</td><td>Optional</td><td>number</td></tr>
</table>

**Response**

<table>
	<tr><td>maxCount</td><td>Required</td><td>number</td></tr>
	<tr><td>maxPages</td><td>Required</td><td>number</td></tr>
	<tr><td>results</td><td>Required</td><td>	<tr><td>id</td><td>Required</td><td>string</td></tr>
	<tr><td>slug</td><td>Required</td><td>string</td></tr>
	<tr><td>image</td><td>Required</td><td>string</td></tr>
	<tr><td>title</td><td>Required</td><td>string</td></tr>
	<tr><td>overview</td><td>Required</td><td>string</td></tr>
	<tr><td>publishedAt</td><td>Required</td><td>string</td></tr>[]</td></tr>
</table>

### listNewsArticles

**Request**

<table>
	<tr><td>filter</td><td>Optional</td>	<tr><td>categoryIds</td><td>Optional</td><td>string[]</td></tr></tr>
	<tr><td>page</td><td>Optional</td><td>number</td></tr>
	<tr><td>limit</td><td>Optional</td><td>number</td></tr>
</table>

**Response**

<table>
	<tr><td>maxCount</td><td>Required</td><td>number</td></tr>
	<tr><td>maxPages</td><td>Required</td><td>number</td></tr>
	<tr><td>results</td><td>Required</td><td>	<tr><td>id</td><td>Required</td><td>string</td></tr>
	<tr><td>slug</td><td>Required</td><td>string</td></tr>
	<tr><td>image</td><td>Required</td><td>string</td></tr>
	<tr><td>title</td><td>Required</td><td>string</td></tr>
	<tr><td>overview</td><td>Required</td><td>string</td></tr>
	<tr><td>publishedAt</td><td>Required</td><td>string</td></tr>[]</td></tr>
</table>

### listNewsCategories

**Request**

<table>
	<tr><td>filter</td><td>Optional</td></tr>
	<tr><td>page</td><td>Optional</td><td>number</td></tr>
	<tr><td>limit</td><td>Optional</td><td>number</td></tr>
</table>

**Response**

<table>
	<tr><td>maxCount</td><td>Required</td><td>number</td></tr>
	<tr><td>maxPages</td><td>Required</td><td>number</td></tr>
	<tr><td>results</td><td>Required</td><td>	<tr><td>id</td><td>Required</td><td>string</td></tr>
	<tr><td>slug</td><td>Required</td><td>string</td></tr>
	<tr><td>title</td><td>Required</td><td>string</td></tr>
	<tr><td>status</td><td>Required</td><td>string</td></tr>
	<tr><td>authorUserId</td><td>Required</td><td>string</td></tr>[]</td></tr>
</table>

### listNfts

**Request**

<table>
	<tr><td>filter</td><td>Optional</td></tr>
	<tr><td>page</td><td>Optional</td><td>number</td></tr>
	<tr><td>limit</td><td>Optional</td><td>number</td></tr>
</table>

**Response**

<table>
	<tr><td>maxCount</td><td>Required</td><td>number</td></tr>
	<tr><td>maxPages</td><td>Required</td><td>number</td></tr>
	<tr><td>results</td><td>Required</td><td>	<tr><td>hip</td><td>Required</td><td>number</td></tr>
	<tr><td>constellation</td><td>Required</td><td>string</td></tr>
	<tr><td>coordinates</td><td>Required</td><td>string</td></tr>
	<tr><td>ranking</td><td>Required</td><td>number</td></tr>
	<tr><td>rarity</td><td>Required</td><td>string</td></tr>
	<tr><td>name</td><td>Required</td><td>string</td></tr>
	<tr><td>tokenId</td><td>Required</td><td>number</td></tr>[]</td></tr>
</table>

### listNotifications

**Request**

<table>
	<tr><td>filter</td><td>Optional</td></tr>
	<tr><td>page</td><td>Optional</td><td>number</td></tr>
	<tr><td>limit</td><td>Optional</td><td>number</td></tr>
</table>

**Response**

<table>
	<tr><td>maxCount</td><td>Required</td><td>number</td></tr>
	<tr><td>maxPages</td><td>Required</td><td>number</td></tr>
	<tr><td>results</td><td>Required</td><td>	<tr><td>id</td><td>Required</td><td>string</td></tr>
	<tr><td>title</td><td>Required</td><td>string</td></tr>
	<tr><td>message</td><td>Required</td><td>string</td></tr>
	<tr><td>isUnread</td><td>Required</td><td>boolean</td></tr>[]</td></tr>
</table>

### listOwnedTokens

**Request**

<table>
	<tr><td>filter</td><td>Optional</td></tr>
	<tr><td>page</td><td>Optional</td><td>number</td></tr>
	<tr><td>limit</td><td>Optional</td><td>number</td></tr>
</table>

**Response**

<table>
	<tr><td>maxCount</td><td>Required</td><td>number</td></tr>
	<tr><td>maxPages</td><td>Required</td><td>number</td></tr>
	<tr><td>results</td><td>Required</td><td>	<tr><td>hip</td><td>Required</td><td>number</td></tr>
	<tr><td>constellation</td><td>Required</td><td>string</td></tr>
	<tr><td>coordinates</td><td>Required</td><td>string</td></tr>
	<tr><td>ranking</td><td>Required</td><td>number</td></tr>
	<tr><td>rarity</td><td>Required</td><td>string</td></tr>
	<tr><td>name</td><td>Required</td><td>string</td></tr>
	<tr><td>tokenId</td><td>Required</td><td>number</td></tr>[]</td></tr>
</table>

### listSpaceObjects

**Request**

<table>
	<tr><td>filter</td><td>Optional</td></tr>
	<tr><td>page</td><td>Optional</td><td>number</td></tr>
	<tr><td>limit</td><td>Optional</td><td>number</td></tr>
</table>

**Response**

<table>
	<tr><td>maxCount</td><td>Required</td><td>number</td></tr>
	<tr><td>maxPages</td><td>Required</td><td>number</td></tr>
	<tr><td>results</td><td>Required</td><td>	<tr><td>identifier</td><td>Required</td><td>string</td></tr>
	<tr><td>hip</td><td>Optional</td><td>number</td></tr>
	<tr><td>name</td><td>Required</td><td>string</td></tr>
	<tr><td>constellation</td><td>Required</td><td>string</td></tr>
	<tr><td>overview</td><td>Optional</td><td>string</td></tr>
	<tr><td>description</td><td>Optional</td><td>string</td></tr>
	<tr><td>rightAscension</td><td>Required</td><td>string</td></tr>
	<tr><td>declination</td><td>Required</td><td>string</td></tr>
	<tr><td>type</td><td>Required</td><td>string</td></tr>[]</td></tr>
</table>

### listTriviaGames

**Request**

<table>
	<tr><td>filter</td><td>Optional</td></tr>
	<tr><td>page</td><td>Optional</td><td>number</td></tr>
	<tr><td>limit</td><td>Optional</td><td>number</td></tr>
</table>

**Response**

<table>
	<tr><td>maxCount</td><td>Required</td><td>number</td></tr>
	<tr><td>maxPages</td><td>Required</td><td>number</td></tr>
	<tr><td>results</td><td>Required</td><td>	<tr><td>id</td><td>Required</td><td>string</td></tr>
	<tr><td>title</td><td>Required</td><td>string</td></tr>
	<tr><td>date</td><td>Required</td><td>string</td></tr>
	<tr><td>status</td><td>Required</td><td>string</td></tr>[]</td></tr>
</table>

### loginWithEmail

**Request**

<table>
	<tr><td>email</td><td>Required</td><td>string</td></tr>
	<tr><td>password</td><td>Required</td><td>string</td></tr>
</table>

**Response**

<table>
	<tr><td>expiresIn</td><td>Required</td><td>number</td></tr>
	<tr><td>token</td><td>Required</td><td>string</td></tr>
</table>

### loginWithWallet

**Request**

<table>
	<tr><td>address</td><td>Required</td><td>string</td></tr>
	<tr><td>signature</td><td>Required</td><td>string</td></tr>
</table>

**Response**

<table>
	<tr><td>expiresIn</td><td>Required</td><td>number</td></tr>
	<tr><td>token</td><td>Required</td><td>string</td></tr>
</table>

### registerWithEmail

**Request**

<table>
	<tr><td>email</td><td>Required</td><td>string</td></tr>
	<tr><td>password</td><td>Required</td><td>string</td></tr>
</table>

**Response**

<table>
	<tr><td>id</td><td>Required</td><td>string</td></tr>
</table>

### search

**Request**

<table>
	<tr><td>query</td><td>Required</td><td>string</td></tr>
</table>

**Response**

<table>
	<tr><td>results</td><td>Required</td><td>	<tr><td>hip</td><td>Required</td><td>number</td></tr>
	<tr><td>name</td><td>Required</td><td>string</td></tr>[]</td></tr>
</table>

### updateNewsArticle

**Request**

<table>
	<tr><td>id</td><td>Required</td><td>string</td></tr>
	<tr><td>slug</td><td>Optional</td><td>string</td></tr>
	<tr><td>image</td><td>Optional</td><td>string</td></tr>
	<tr><td>title</td><td>Optional</td><td>string</td></tr>
	<tr><td>content</td><td>Optional</td><td>string</td></tr>
	<tr><td>overview</td><td>Optional</td><td>string</td></tr>
	<tr><td>publishedAt</td><td>Optional</td><td>string</td></tr>
	<tr><td>status</td><td>Optional</td><td>draft | published</td></tr>
</table>

**Response**

<table>
	<tr><td>id</td><td>Required</td><td>string</td></tr>
	<tr><td>slug</td><td>Required</td><td>string</td></tr>
	<tr><td>image</td><td>Required</td><td>string</td></tr>
	<tr><td>title</td><td>Required</td><td>string</td></tr>
	<tr><td>overview</td><td>Required</td><td>string</td></tr>
	<tr><td>content</td><td>Required</td><td>string</td></tr>
	<tr><td>publishedAt</td><td>Required</td><td>string</td></tr>
	<tr><td>status</td><td>Required</td><td>string</td></tr>
</table>

### updateNewsCategory

**Request**

<table>
	<tr><td>id</td><td>Required</td><td>string</td></tr>
	<tr><td>slug</td><td>Optional</td><td>string</td></tr>
	<tr><td>title</td><td>Optional</td><td>string</td></tr>
</table>

**Response**

<table>
	<tr><td>id</td><td>Required</td><td>string</td></tr>
	<tr><td>slug</td><td>Required</td><td>string</td></tr>
	<tr><td>title</td><td>Required</td><td>string</td></tr>
	<tr><td>status</td><td>Required</td><td>string</td></tr>
	<tr><td>authorUserId</td><td>Required</td><td>string</td></tr>
</table>

### updateNotification

**Request**

<table>
	<tr><td>id</td><td>Required</td><td>string</td></tr>
	<tr><td>title</td><td>Optional</td><td>string</td></tr>
	<tr><td>message</td><td>Optional</td><td>string</td></tr>
</table>

**Response**

<table>
	<tr><td>id</td><td>Required</td><td>string</td></tr>
	<tr><td>title</td><td>Required</td><td>string</td></tr>
	<tr><td>message</td><td>Required</td><td>string</td></tr>
	<tr><td>authorUserId</td><td>Required</td><td>string</td></tr>
	<tr><td>recipientUserIds</td><td>Required</td><td>string[]</td></tr>
</table>

### updateProfile

**Request**

<table>
	<tr><td>email</td><td>Optional</td><td>string</td></tr>
	<tr><td>discord</td><td>Optional</td><td>string</td></tr>
	<tr><td>telegram</td><td>Optional</td><td>string</td></tr>
</table>

**Response**

<table>

</table>

### updateSpaceObject

**Request**

<table>
	<tr><td>id</td><td>Required</td><td>string</td></tr>
	<tr><td>identifier</td><td>Optional</td><td>string</td></tr>
	<tr><td>hip</td><td>Optional</td><td>number</td></tr>
	<tr><td>name</td><td>Optional</td><td>string</td></tr>
	<tr><td>constellation</td><td>Optional</td><td>string</td></tr>
	<tr><td>overview</td><td>Optional</td><td>string</td></tr>
	<tr><td>description</td><td>Optional</td><td>string</td></tr>
	<tr><td>rightAscension</td><td>Optional</td><td>string</td></tr>
	<tr><td>declination</td><td>Optional</td><td>string</td></tr>
	<tr><td>type</td><td>Optional</td><td>string</td></tr>
</table>

**Response**

<table>

</table>

### updateTriviaGame

**Request**

<table>
	<tr><td>id</td><td>Optional</td><td>string</td></tr>
	<tr><td>date</td><td>Optional</td><td>string</td></tr>
	<tr><td>title</td><td>Optional</td><td>string</td></tr>
	<tr><td>status</td><td>Optional</td><td>draft | live | ended</td></tr>
</table>

**Response**

<table>
	<tr><td>id</td><td>Required</td><td>string</td></tr>
</table>
