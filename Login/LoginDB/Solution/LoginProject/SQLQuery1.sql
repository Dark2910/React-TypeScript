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

/**/

DECLARE @myDay DATE;
SET @myDay = '12345678';

IF(ISDATE(CONVERT(VARCHAR, @myDay, 23)) = 1)
		PRINT @myDay;
ELSE
		PRINT 'It is not a day';

/**/

SELECT collation_name 
FROM sys.columns 
WHERE object_id = OBJECT_ID('UserAuthentication') AND name = 'passwordHash';

--Modern_Spanish_CI_AS

ALTER TABLE [dbo].[UserAuthentication]
ALTER COLUMN passwordHash VARCHAR(MAX) COLLATE Latin1_General_CI_AI;

SELECT collation_name 
FROM sys.columns 
WHERE object_id = OBJECT_ID('UserAuthentication') AND name = 'passwordHash';

