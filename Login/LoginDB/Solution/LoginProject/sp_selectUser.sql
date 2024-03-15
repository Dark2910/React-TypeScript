USE [Login]
GO

ALTER PROC [dbo].[sp_selectUser](
	@idUserCredentials INT
)
AS
BEGIN
	SELECT [uc].[idUserCredentials] AS 'id', CONCAT([ud].[firstName], ' ', [ud].[lastName]) AS 'name', [ud].[birthday], [uc].[userName], [uc].[email], [ua].[passwordHash], [us].[isActive]
	FROM [dbo].[UserData] ud
	INNER JOIN [dbo].[UserCredentials] uc ON [uc].[idUserCredentials] = [ud].[idUserCredentials]
	INNER JOIN [dbo].[UserAuthentication] ua ON [ua].[idUserAuthentication] = [uc].[idUserAuthentication]
	INNER JOIN [dbo].[UserState] us ON [us].[idUserState] = [uc].[idUserState]
	WHERE [uc].[idUserCredentials] = @idUserCredentials
END;