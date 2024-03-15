USE[Login]
GO

SELECT * FROM UserData;
SELECT * FROM UserCredentials;
SELECT * FROM UserAuthentication;
SELECT * FROM UserState;

/**/

SELECT [uc].[idUserCredential], CONCAT([ud].[firstName], ' ', [ud].[lastName]) AS 'name', [ud].[birthday], [uc].[userName], [uc].[email], [ua].[passwordHash], [us].[isActive]
FROM [dbo].[UserData] ud
INNER JOIN [dbo].[UserCredentials] uc ON [uc].[idUserCredential] = [ud].[idUserCredential]
INNER JOIN [dbo].[UserAuthentication] ua ON [ua].[idUserAuthentication] = [uc].[idUserAuthentication]
INNER JOIN [dbo].[UserState] us ON [us].[idUserState] = [uc].[idUserState]


DECLARE @myDay DATE;
SET @myDay = '12345678';

IF(ISDATE(CONVERT(VARCHAR, @myDay, 23)) = 1)
		PRINT @myDay;
ELSE
		PRINT 'It is not a day';
