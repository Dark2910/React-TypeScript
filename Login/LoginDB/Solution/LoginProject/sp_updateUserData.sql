USE [Login]
GO
/****** Object:  StoredProcedure [dbo].[sp_updateUserData]    Script Date: 3/20/2024 2:01:27 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

ALTER PROCEDURE [dbo].[sp_updateUserData](
	@firstName VARCHAR(50),
	@lastName VARCHAR(50),
	@birthday VARCHAR(10),
	@idUserCredential INT
)
AS
BEGIN
	DECLARE @idUserData INT;
	SET @idUserData = (SELECT ud.idUserData
						FROM [dbo].[UserData] ud
						INNER JOIN [dbo].[UserCredentials] uc ON uc.idUserCredential = ud.idUserCredential
						WHERE uc.idUserCredential = @idUserCredential);

	UPDATE [dbo].[UserData]
	SET
		firstName = @firstName,
		lastName = @lastName,
		birthday = @birthday
	WHERE idUserData = @idUserData
END;