USE [Login]
GO

ALTER PROCEDURE [dbo].[sp_deleteUser](
	@idUserCredential INT
)
AS
BEGIN
	IF EXISTS(SELECT 1 FROM [dbo].[UserCredentials] WHERE idUserCredential = @idUserCredential)
	BEGIN
		BEGIN TRY
			BEGIN TRANSACTION
				DECLARE @idUserData INT
				SET @idUserData = (SELECT idUserData FROM [dbo].[UserData] WHERE idUserCredential = @idUserCredential);

				DECLARE @idUserAuthentication INT
				SET @idUserAuthentication = (SELECT ua.idUserAuthentication 
												FROM [dbo].[UserAuthentication] ua
												INNER JOIN [dbo].[UserCredentials] uc ON uc.idUserAuthentication = ua.idUserAuthentication
												WHERE uc.idUserCredential = @idUserCredential);

				DECLARE @idUserState INT
				SET @idUserState = (SELECT us.idUserState 
										FROM [dbo].[UserState] us
										INNER JOIN [dbo].[UserCredentials] uc ON uc.idUserState = us.idUserState
										WHERE uc.idUserCredential = @idUserCredential);

				DELETE FROM [dbo].[UserData] WHERE idUserData = @idUserData;
				DELETE FROM [dbo].[UserCredentials] WHERE idUserCredential = @idUserCredential;
				DELETE FROM [dbo].[UserAuthentication] WHERE idUserAuthentication = @idUserAuthentication;
				DELETE FROM [dbo].[UserState] WHERE idUserState = @idUserState;

				COMMIT TRANSACTION
		END TRY
		BEGIN CATCH
			ROLLBACK TRANSACTION;
		END CATCH
	END
END
