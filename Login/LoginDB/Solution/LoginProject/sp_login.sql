USE [Login]
GO

ALTER PROCEDURE [dbo].[sp_login](
	@email VARCHAR(50),
	@password VARCHAR(MAX)
)
AS
BEGIN
	DECLARE @result BIT;
	SET @result = 0;

	DECLARE @message VARCHAR(50);
	SET @message = '';

	DECLARE @idUserCredentials INT;
	SET @idUserCredentials = NULL;

	IF EXISTS(SELECT 1
				FROM [dbo].[UserCredentials] uc
				INNER JOIN [dbo].[UserAuthentication] ua ON [ua].[idUserAuthentication] = [uc].[idUserAuthentication]
				INNER JOIN [dbo].[UserState] us ON [us].[idUserState] = [uc].[idUserState]
				WHERE [uc].[email] = @email AND [ua].[passwordHash] = @password AND [us].[isActive] = 1)
	BEGIN
		SET @idUserCredentials = (SELECT [uc].[idUserCredentials] 
									FROM [dbo].[UserCredentials] uc
									INNER JOIN [dbo].[UserAuthentication] ua ON [ua].[idUserAuthentication] = [uc].[idUserAuthentication]
									INNER JOIN [dbo].[UserState] us ON [us].[idUserState] = [uc].[idUserState]
									WHERE [uc].[email] = @email AND [ua].[passwordHash] = @password);
		SET @result = 1;
		SET @message = 'Authentication successful.';
	END
	ELSE
	BEGIN
		SET @result = 0;
		SET @message = 'Authentication failed.';
	END

	SELECT @message AS 'message', @result AS 'result', @idUserCredentials AS 'idUserCredentials'
END;
