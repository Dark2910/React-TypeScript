USE [Login]
GO

ALTER PROCEDURE [dbo].[sp_login](
	@email VARCHAR(50),
	@password VARCHAR(MAX) OUTPUT
)
AS
BEGIN
	SET @password = NULL;

	IF EXISTS(SELECT 1
				FROM [dbo].[UserCredentials] uc
				INNER JOIN [dbo].[UserAuthentication] ua ON [ua].[idUserAuthentication] = [uc].[idUserAuthentication]
				INNER JOIN [dbo].[UserState] us ON [us].[idUserState] = [uc].[idUserState]
				WHERE [uc].[email] = @email AND [us].[isActive] = 1)
	BEGIN
		SET @password = (SELECT [ua].[passwordHash] 
									FROM [dbo].[UserAuthentication] ua
									INNER JOIN [dbo].[UserCredentials] uc ON [uc].[idUserAuthentication] = [ua].[idUserAuthentication]
									INNER JOIN [dbo].[UserState] us ON [us].[idUserState] = [uc].[idUserState]
									WHERE [uc].[email] = @email AND [us].[isActive] = 1);
	END
END;



--CREATE PROCEDURE [dbo].[sp_login](
--	@email VARCHAR(50),
--	@password VARCHAR(MAX),
--	@result BIT OUTPUT,
--    @idUserCredential INT OUTPUT
--)
--AS
--BEGIN
--	--DECLARE @result BIT;
--	SET @result = 0;

--	--DECLARE @idUserCredential INT;
--	SET @idUserCredential = NULL;

--	IF EXISTS(SELECT 1
--				FROM [dbo].[UserCredentials] uc
--				INNER JOIN [dbo].[UserAuthentication] ua ON [ua].[idUserAuthentication] = [uc].[idUserAuthentication]
--				INNER JOIN [dbo].[UserState] us ON [us].[idUserState] = [uc].[idUserState]
--				WHERE [uc].[email] = @email AND [ua].[passwordHash] = @password AND [us].[isActive] = 1)
--	BEGIN
--		SET @idUserCredential = (SELECT [uc].[idUserCredential] 
--									FROM [dbo].[UserCredentials] uc
--									INNER JOIN [dbo].[UserAuthentication] ua ON [ua].[idUserAuthentication] = [uc].[idUserAuthentication]
--									INNER JOIN [dbo].[UserState] us ON [us].[idUserState] = [uc].[idUserState]
--									WHERE [uc].[email] = @email AND [ua].[passwordHash] = @password);
--		SET @result = 1;
--	END
--	ELSE
--	BEGIN
--		SET @result = 0;
--	END

--	--SELECT @result AS 'result', @idUserCredential AS 'idUserCredential'
--END;
	