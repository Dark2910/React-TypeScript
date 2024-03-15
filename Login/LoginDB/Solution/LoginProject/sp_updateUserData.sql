USE [Login]
GO

ALTER PROCEDURE [dbo].[sp_updateUserData](
	@firstName VARCHAR(50),
	@lastName VARCHAR(50),
	@birthday VARCHAR(8),
	@idUserCredentials INT
)
AS
BEGIN
	DECLARE @idUserData INT;
	SET @idUserData = (SELECT ud.idUserData
						FROM [dbo].[UserCredentials] uc
						INNER JOIN [dbo].[UserData] ud ON ud.idUserCredentials = uc.idUserCredentials
						WHERE uc.idUserCredentials = @idUserCredentials);

	UPDATE [dbo].[UserData]
	SET
		firstName = @firstName,
		lastName = @lastName,
		birthday = @birthday
	WHERE idUserData = @idUserData
END;