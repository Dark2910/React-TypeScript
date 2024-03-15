USE [Login]
GO

ALTER PROC [dbo].[sp_updateUserAuthentication](
	@idUserCredentials INT,
	@passwordHash VARCHAR(MAX)
)
AS
BEGIN
	DECLARE @idUserAuthentication INT
	SET @idUserAuthentication = (SELECT ua.idUserAuthentication
									FROM [dbo].[UserAuthentication] ua
									INNER JOIN [dbo].[UserCredentials] uc ON uc.idUserAuthentication = ua.idUserAuthentication
									WHERE uc.idUserCredentials = @idUserCredentials);

	UPDATE [dbo].[UserAuthentication]
	SET
		passwordHash = @passwordHash
	WHERE idUserAuthentication = @idUserAuthentication;
END;