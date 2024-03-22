USE [Login]
GO
/****** Object:  Table [dbo].[UserAuthentication]    Script Date: 3/20/2024 2:06:55 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[UserAuthentication](
	[idUserAuthentication] [int] IDENTITY(1,1) NOT NULL,
	[passwordHash] [varchar](max) NULL,
	[registrationDate] [datetime] NOT NULL,
 CONSTRAINT [PK__UserAuth__A5F175D9C7FFFBF8] PRIMARY KEY CLUSTERED 
(
	[idUserAuthentication] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[UserCredentials]    Script Date: 3/20/2024 2:06:55 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[UserCredentials](
	[idUserCredential] [int] IDENTITY(1,1) NOT NULL,
	[userName] [varchar](50) NOT NULL,
	[email] [varchar](50) NOT NULL,
	[idUserAuthentication] [int] NOT NULL,
	[idUserState] [int] NOT NULL,
	[registrationDate] [datetime] NOT NULL,
 CONSTRAINT [PK__UserCred__56DB33005D067BB2] PRIMARY KEY CLUSTERED 
(
	[idUserCredential] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY],
 CONSTRAINT [UQ_UserCredentials_email] UNIQUE NONCLUSTERED 
(
	[email] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY],
 CONSTRAINT [UQ_UserCredentials_userName] UNIQUE NONCLUSTERED 
(
	[userName] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[UserData]    Script Date: 3/20/2024 2:06:55 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[UserData](
	[idUserData] [int] IDENTITY(1,1) NOT NULL,
	[firstName] [varchar](50) NOT NULL,
	[lastName] [varchar](50) NOT NULL,
	[birthday] [date] NOT NULL,
	[idUserCredential] [int] NOT NULL,
	[registrationDate] [datetime] NOT NULL,
 CONSTRAINT [PK__UserData__1B54D34A59108BC3] PRIMARY KEY CLUSTERED 
(
	[idUserData] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[UserState]    Script Date: 3/20/2024 2:06:55 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[UserState](
	[idUserState] [int] IDENTITY(1,1) NOT NULL,
	[isActive] [bit] NOT NULL,
	[registrationDate] [datetime] NOT NULL,
 CONSTRAINT [PK__UserStat__A918C44C848CBBFB] PRIMARY KEY CLUSTERED 
(
	[idUserState] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
ALTER TABLE [dbo].[UserAuthentication] ADD  CONSTRAINT [DF__UserAuthe__regis__3D5E1FD2]  DEFAULT (getdate()) FOR [registrationDate]
GO
ALTER TABLE [dbo].[UserCredentials] ADD  CONSTRAINT [DF__UserCrede__regis__3E52440B]  DEFAULT (getdate()) FOR [registrationDate]
GO
ALTER TABLE [dbo].[UserData] ADD  CONSTRAINT [DF__UserData__regist__3F466844]  DEFAULT (getdate()) FOR [registrationDate]
GO
ALTER TABLE [dbo].[UserState] ADD  CONSTRAINT [DF__UserState__isAct__2C3393D0]  DEFAULT ((1)) FOR [isActive]
GO
ALTER TABLE [dbo].[UserState] ADD  CONSTRAINT [DF__UserState__regis__412EB0B6]  DEFAULT (getdate()) FOR [registrationDate]
GO
ALTER TABLE [dbo].[UserCredentials]  WITH CHECK ADD  CONSTRAINT [FK_UserCredentials_UserAuthentication] FOREIGN KEY([idUserAuthentication])
REFERENCES [dbo].[UserAuthentication] ([idUserAuthentication])
GO
ALTER TABLE [dbo].[UserCredentials] CHECK CONSTRAINT [FK_UserCredentials_UserAuthentication]
GO
ALTER TABLE [dbo].[UserCredentials]  WITH CHECK ADD  CONSTRAINT [FK_UserCredentials_UserState] FOREIGN KEY([idUserState])
REFERENCES [dbo].[UserState] ([idUserState])
GO
ALTER TABLE [dbo].[UserCredentials] CHECK CONSTRAINT [FK_UserCredentials_UserState]
GO
ALTER TABLE [dbo].[UserData]  WITH CHECK ADD  CONSTRAINT [FK_UserData_UserCredentials] FOREIGN KEY([idUserCredential])
REFERENCES [dbo].[UserCredentials] ([idUserCredential])
GO
ALTER TABLE [dbo].[UserData] CHECK CONSTRAINT [FK_UserData_UserCredentials]
GO
