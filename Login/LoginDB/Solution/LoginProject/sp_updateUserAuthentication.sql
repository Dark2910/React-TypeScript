USE [Login]
GO

ALTER PROC [dbo].[sp_updateUserAuthentication](
	@idUserCredential INT,
	@passwordHash VARCHAR(MAX)
)
AS
BEGIN
	DECLARE @idUserAuthentication INT
	SET @idUserAuthentication = (SELECT ua.idUserAuthentication
									FROM [dbo].[UserAuthentication] ua
									INNER JOIN [dbo].[UserCredentials] uc ON uc.idUserAuthentication = ua.idUserAuthentication
									WHERE uc.idUserCredential = @idUserCredential);

	UPDATE [dbo].[UserAuthentication]
	SET
		passwordHash = @passwordHash
	WHERE idUserAuthentication = @idUserAuthentication;
END;