USE [Login]
GO

ALTER PROC [dbo].[sp_selectUser](
	@idUserCredential INT
)
AS
BEGIN
	SELECT [uc].[idUserCredential] AS 'id', CONCAT([ud].[firstName], ' ', [ud].[lastName]) AS 'name', [ud].[birthday], [uc].[userName], [uc].[email], [ua].[passwordHash], [us].[isActive]
	FROM [dbo].[UserData] ud
	INNER JOIN [dbo].[UserCredentials] uc ON [uc].[idUserCredential] = [ud].[idUserCredential]
	INNER JOIN [dbo].[UserAuthentication] ua ON [ua].[idUserAuthentication] = [uc].[idUserAuthentication]
	INNER JOIN [dbo].[UserState] us ON [us].[idUserState] = [uc].[idUserState]
	WHERE [uc].[idUserCredential] = @idUserCredential
END;