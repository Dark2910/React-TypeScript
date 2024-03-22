USE [Login]
GO

ALTER PROCEDURE [dbo].[sp_insertUser](
	@firstName VARCHAR(50),
	@lastName VARCHAR(50),
	@birthday VARCHAR(10),
	@email VARCHAR(50),
	@userName VARCHAR(50),
	@passwordHash VARCHAR(MAX),
	@message BIT OUTPUT
)
AS
BEGIN
IF NOT EXISTS(SELECT 1 FROM [dbo].[UserData] WHERE firstName = @firstName AND lastName = @lastName)
	BEGIN
		BEGIN TRY
			BEGIN TRANSACTION 
				INSERT INTO [dbo].[UserAuthentication] (passwordHash)
				VALUES (@passwordHash);

				DECLARE @lastIdUserAuthentication INT;
				SET @lastIdUserAuthentication = SCOPE_IDENTITY();

				INSERT INTO [dbo].[UserState] DEFAULT VALUES;

				DECLARE @lastIdUserState INT;
				SET @lastIdUserState = SCOPE_IDENTITY();

				INSERT INTO [dbo].[UserCredentials] (userName, email, idUserAuthentication, idUserState)
				VALUES(@userName, @email, @lastIdUserAuthentication, @lastIdUserState);

				DECLARE @lastIdUserCredential INT;
				SET @lastIdUserCredential = SCOPE_IDENTITY();

				INSERT INTO [dbo].[UserData] (firstName, lastName, birthday, idUserCredential)
				VALUES(@firstName, @lastName, @birthday, @lastIdUserCredential);
			
				SET @message = 1;
				COMMIT TRANSACTION
		END TRY
		BEGIN CATCH
			SET @message = 0;
			ROLLBACK TRANSACTION
			
		END CATCH
	END
	ELSE
		SET @message = 0;
END
