USE [Login]
GO

ALTER PROC [dbo].[sp_updateUserState](
	@idUserCredential INT
)
AS
BEGIN
	DECLARE @idUserState INT
	SET @idUserState = (SELECT us.idUserState
							FROM [dbo].[UserState] us
							INNER JOIN [dbo].[UserCredentials] uc ON uc.idUserState = us.idUserState
							WHERE uc.idUserCredential = @idUserCredential);

	UPDATE [dbo].[UserState]
	SET
		isActive = CASE 
					WHEN isActive = 1 THEN 0
					ELSE 1 
				   END
	WHERE idUserState = @idUserState;
END;