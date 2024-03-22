USE [Login]
GO

ALTER PROCEDURE [dbo].[sp_updateUserCredentials](
	@userName VARCHAR(50),
	@email VARCHAR(50),
	@idUserCredential INT
)
AS
BEGIN
	UPDATE [dbo].[UserCredentials]
	SET
		userName = @userName,
		email = @email
	WHERE idUserCredential = @idUserCredential
END;