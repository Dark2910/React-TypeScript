USE [Login]
GO

ALTER PROCEDURE [dbo].[sp_insertUser](
	@firstName VARCHAR(50),
	@lastName VARCHAR(50),
	@birthday VARCHAR(8),
	@email VARCHAR(50),
	@userName VARCHAR(50),
	@passwordHash VARCHAR(50)
)
AS
BEGIN
	INSERT INTO [dbo].[UserAuthentication] (passwordHash)
	VALUES (@passwordHash);

	DECLARE @lastIdUserAuthentication INT;
	SET @lastIdUserAuthentication = SCOPE_IDENTITY();

	INSERT INTO [dbo].[UserState] DEFAULT VALUES;

	DECLARE @lastIdUserState INT;
	SET @lastIdUserState = SCOPE_IDENTITY();

	INSERT INTO [dbo].[UserCredentials] (userName, email, idUserAuthentication, idUserState)
	VALUES(@userName, @email, @lastIdUserAuthentication, @lastIdUserState);

	DECLARE @lastIdUserCredentials INT;
	SET @lastIdUserCredentials = SCOPE_IDENTITY();

	INSERT INTO [dbo].[UserData] (firstName, lastName, birthday, idUserCredentials)
	VALUES(@firstName, @lastName, @birthday, @lastIdUserCredentials);
END