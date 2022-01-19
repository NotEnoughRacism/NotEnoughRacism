/// <reference types="../CTObfuscatedAutocomplete/index" />
/// <reference lib="esnext" />

import {
    @ButtonProperty,
Color,
    @ColorProperty,
@PercentSliderProperty,
@SelectorProperty,
@TextProperty,
@SwitchProperty,
@SliderProperty,
@Vigilant,
@CheckboxProperty,
@ParagraphProperty
} from '../../../Vigilance';

@Vigilant("NotEnoughRacismConfig/General", "General", {
    getCategoryComparator: () => (a, b) => {
        const categories = ['Not general!', 'General'];

        return categories.indexOf(b.name) - categories.indexOf(a.name);
    }
})
class Settings {

    // @ButtonProperty({
    //     name: "General",
    //     category: "General"
    // })

    // @ButtonProperty({
    //     name: "Misc",
    //     category: "Misc"
    // })

    // @ButtonProperty({
    //     name: "Macros",
    //     category: "Macros"
    // })

    // @ButtonProperty({
    //     name: "Swap Macros",
    //     category: "Macros"
    // })

    // @ButtonProperty({
    //     name: "Dungeons",
    //     category: "Dungeons"
    // })

    // @ButtonProperty({
    //     name: "Dungeons Map Scanner",
    //     category: "Dungeons Map Scanner"
    // })

    // @ButtonProperty({
    //     name: "Dungeons ESP",
    //     category: "Dungeons ESP"
    // })

    // @ButtonProperty({
    //     name: "ESP",
    //     category: "ESP"
    // })

    // @ButtonProperty({
    //     name: "Slayers",
    //     category: "Slayers"
    // })

    // @ButtonProperty({
    //     name: "Bridge Module",
    //     category: "Bridge Module"
    // })

    //---------------------------------------------------------------------------------------------------
    //---------------------------------------------------------------------------------------------------
    //---------------------------------------------------------------------------------------------------

    @SliderProperty({
        name: "NER Chroma Speed",
        description: "For some reason the lower the slider is, the fatser the chroma and the higher the slider is the slower the chroma",
        category: "General",
        subcategory: "Settings",
        min: 1,
        max: 50
    })
    chromaSpeed = 15;

    @SelectorProperty({
        name: "NER Gui Button-style",
        description: "Choose, whether you want to gui buttons to have a chroma or a white text",
        category: "General",
        subcategory: "Settings",
        options: ['Chroma', 'White']
    })
    guibuttonstyle = 0;

    @SwitchProperty({
        name: "Rich Presence",
        description: "Enable Discord Rich Presence for NotEnoughRacism",
        category: "General",
        subcategory: "Settings"
    })
    rpcEnabled = false;

    // @SwitchProperty({
    //     name: "Low Power Mode",
    //     description: "Enable low power mode for NotEnoughRacism.\n&8- Use this setting if you are playing on a laptop and want to save battery.",
    //     category: "General",
    //     subcategory: "Settings"
    // })
    // lowPowerMode = false;

    // @SwitchProperty({
    //     name: "Automatically Report Boih",
    //     description: "Automatically reports Boih for boosting upon joining SkyBlock.",
    //     category: "General",
    //     subcategory: "Settings"
    // })
    // reportBoih = true;

    // @SwitchProperty({
    //     name: "Auto notifiy FC Member",
    //     description: "Sends a Chat Notification when an FC Member joins your lobby",
    //     category: "General",
    //     subcategory: "Settings"
    // })
    // autoAlertFC = false;


    // @SwitchProperty({
    //     name: "Anti Vanish",
    //     description: "Reveals all hideen players\n&8- Has not been tested, no promises if it doesn't work.\n&8- This will reveal watchdog, and all invisible players",
    //     category: "General",
    //     subcategory: "Anti Vanish"
    // })
    // antiVanish = true;

    // @SwitchProperty({
    //     name: "Anti Vanish Alert",
    //     description: "Toggle whether a chat message should be sent or not",
    //     category: "General",
    //     subcategory: "Anti Vanish"
    // })
    // antiVanishAlert = false;


    //---------------------------------------------------------------------------------------------------
    //---------------------------------------------------------------------------------------------------
    //---------------------------------------------------------------------------------------------------


    @SwitchProperty({
        name: "Auto Island",
        description: "Returns to your island upon a server restart",
        category: "Auto Island",
        subcategory: "Auto Island"
    })
    autoIsland = false;

    @SelectorProperty({
        name: "Auto Island Type",
        description: "Choose the type of Auto Island\n&8- If your account is in the coop choose Normal, if they are not choose Visit",
        category: "Auto Island",
        subcategory: "Auto Island",
        options: ["Normal", "Visit"]
    })
    autoIslandType = 0;

    @TextProperty({
        name: "Auto Island IGN",
        description: "Set the IGN for the account to visit\n&8- The spelling/capatilisation must be accurate as the detection depends on it",
        category: "Auto Island",
        subcategory: "Auto Island"
    })
    autoIslandIGN = ""

    //---------------------------------------------------------------------------------------------------

    // @SwitchProperty({
    //     name: "Fake Ban",
    //     description: "Toggles Fake Ban",
    //     category: "Fake Ban",
    //     subcategory: "General"
    // })
    // fakeBan = false;

    // @SelectorProperty({
    //     name: "Fake Ban Length",
    //     description: "Sets the length for the ban screen",
    //     category: "Fake Ban",
    //     subcategory: "Duration",
    //     options: ["7d", "30d", "90d", "180d", "360d", "Perm"]
    // })
    // fakeBanLength = 0;

    // @SelectorProperty({
    //     name: "Fake Ban Reason",
    //     description: "Sets the reason for the ban screen",
    //     category: "Fake Ban",
    //     subcategory: "Reason",
    //     options: ["Cheating", "Account Boosting", "Profile Boosting", "Security Ban", "Build Battle", "Innapropriate Cosmetics", "Innapropriate Skin/Cape", "Cross Teaming", "Negatively Affecting Teammates", "Disrespect to Members"]
    // })
    // fakeBanReason = 0;

    // @TextProperty({
    //     name: "Fake Ban ID",
    //     description: "Sets the Ban ID for the ban screen",
    //     category: "Fake Ban",
    //     subcategory: "Ban ID"
    // })
    // fakeBanID = ""

    //---------------------------------------------------------------------------------------------------

    @SwitchProperty({
        name: "Reveal Hidden Ghosts",
        description: "Reveals Hidden Ghosts",
        category: "QOL",
        subcategory: "Ghost QOL"
    })
    hiddenGhosts = false;

    @SwitchProperty({
        name: "Hit through Players",
        description: "Allows you to hit through players",
        category: "QOL",
        subcategory: "Ghost Arm"
    })
    playerGhostArm = false;

    // @SwitchProperty({
    //     name: "ESP Players",
    //     description: "Draws an ESP Box around players when Hit Through Players is enabled",
    //     category: "Misc",
    //     subcategory: "QOL"
    // })
    // ghostArmESP = false;

    // @SwitchProperty({
    //     name: "Auto close Crystal Hollows Chest",
    //     description: "Auto closes the Chest GUI",
    //     category: "QOL",
    //     subcategory: "Close Chests"
    // })
    // autoCloseCHChests = false;

    @SwitchProperty({
        name: "Block SB Menu/Magical Map Clicks",
        category: "QOL",
        subcategory: "QOL"
    })
    blockSBMenu = false;

    // @SwitchProperty({
    //     name: "Auto Accept Trapper Task",
    //     category: "Farming Islands",
    //     subcategory: "QOL"
    // })
    // autoAcceptTrapper = false;

    // @SwitchProperty({
    //     name: "Trapper Cooldown Alert",
    //     description: "Tells you when trapper cooldown has ender",
    //     category: "Farming Islands",
    //     subcategory: "QOL"
    // })
    // trapperCooldown = false;

    // @SwitchProperty({
    //     name: "Perfect Gemstone Highlighter Toggle",
    //     description: "Highlights most (if not all) perfect gemstones on items on the auction house, useful for sniping things like gemstone gauntlets that still contain perfect gemstones.",
    //     category: "Perfect Gemstone Highlighter",
    //     subcategory: "Perfect Gemstone Highlighter"
    // })
    // perfectGemstoneHighlightToggle = false;

    // @ButtonProperty({
    //     name: "Perfect Gemstone Highlighter Information",
    //     description: "&dWarning:&r The Gemstone Highlighter might be buggy in some gui's, and on occasion, it cna happen that it randomly highlights pieces without perfect gemstones on it, even if you haven't done anything for it to update. I have tried to fix this, but I didn't find a way to do so at the time being.",
    //     category: "Perfect Gemstone Highlighter",
    //     subcategory: "Perfect Gemstone Highlighter"
    // })
    // gemstoneHighlighterInformationFunction() {}

    //---------------------------------------------------------------------------------------------------
    //---------------------------------------------------------------------------------------------------
    //---------------------------------------------------------------------------------------------------


    //---------------------------------------------------------------------------------------------------
    //---------------------------------------------------------------------------------------------------
    //---------------------------------------------------------------------------------------------------


    //---------------------------------------------------------------------------------------------------
    //---------------------------------------------------------------------------------------------------
    //---------------------------------------------------------------------------------------------------

    //---------------------------------------------------------------------------------------------------
    //---------------------------------------------------------------------------------------------------
    //---------------------------------------------------------------------------------------------------

    // @SwitchProperty({
    //     name: "Module enabled",
    //     description: "Toggle Bridge module on or off",
    //     category: "Bridge Module",
    //     subcategory: "Settings"
    // }) isEnabled = false;

    // @TextProperty({
    //     name: "Bot Name",
    //     description: "The Minecraft name of the chatbot",
    //     category: "Bridge Module",
    //     subcategory: "Settings"
    // }) botName = ""


    // @SelectorProperty({
    //     name: "Username color",
    //     description: "Select the color of the discord user",
    //     category: "Bridge Module",
    //     subcategory: "⭍Customize",
    //     options: [
    //         "§0Black",
    //         "§1Dark Blue",
    //         "§2Dark Green",
    //         "§3Dark Aqua",
    //         "§4Dark Red",
    //         "§5Dark Purple",
    //         "§6Gold",
    //         "§7Gray",
    //         "§8Dark Grey",
    //         "§9Blue",
    //         "§aGreen",
    //         "§bAqua",
    //         "§cRed",
    //         "§dLight Purple",
    //         "§eYellow",
    //         "§fWhite",
    //     ]
    // }) userColor = 3;

    // //---------------------------------------------------------------------------------------------------

    // @TextProperty({
    //     name: "Chat Mode text",
    //     description: 'Chat Mode text, usually referred to as the chat channel. Leave empty to disable\n&8- This refers to "&2Guild >&8"',
    //     category: "Bridge Module",
    //     subcategory: "⭍Customize",
    // }) customChannel = "Guild";

    // @SelectorProperty({
    //     name: "Chat Mode color",
    //     description: "Set the color of the prefix",
    //     category: "Bridge Module",
    //     subcategory: "⭍Customize",
    //     options: [
    //         "§0Black",
    //         "§1Dark Blue",
    //         "§2Dark Green",
    //         "§3Dark Aqua",
    //         "§4Dark Red",
    //         "§5Dark Purple",
    //         "§6Gold",
    //         "§7Gray",
    //         "§8Dark Grey",
    //         "§9Blue",
    //         "§aGreen",
    //         "§bAqua",
    //         "§cRed",
    //         "§dLight Purple",
    //         "§eYellow",
    //         "§fWhite",
    //     ]
    // }) customChannelColor = 2;

    // //---------------------------------------------------------------------------------------------------

    // @TextProperty({
    //     name: "Rank text",
    //     description: "Rank text, usually referred to as the Rank. Leave empty to disable\n&8- This refers to the persons rank; popular setting is 'BRIDGE'\n&8- Do not add the brackets, they are automatically added",
    //     category: "Bridge Module",
    //     subcategory: "⭍Customize",
    // }) customUserRank = "Bot";

    // @SelectorProperty({
    //     name: "Rank color",
    //     description: "Set the color of the rank",
    //     category: "Bridge Module",
    //     subcategory: "⭍Customize",
    //     options: [
    //         "§0Black",
    //         "§1Dark Blue",
    //         "§2Dark Green",
    //         "§3Dark Aqua",
    //         "§4Dark Red",
    //         "§5Dark Purple",
    //         "§6Gold",
    //         "§7Gray",
    //         "§8Dark Grey",
    //         "§9Blue",
    //         "§aGreen",
    //         "§bAqua",
    //         "§cRed",
    //         "§dLight Purple",
    //         "§eYellow",
    //         "§fWhite",
    //     ]
    // }) customUserRankColor = 11;

    // //---------------------------------------------------------------------------------------------------

    // @TextProperty({
    //     name: "Suffix",
    //     description: "Suffix text, usually referred to as the players guild rank. Leave empty to disable\n&8- Do not add the brackets, they are automatically added",
    //     category: "Bridge Module",
    //     subcategory: "⭍Customize",
    // }) customGuildRank = ""

    // @SelectorProperty({
    //     name: "Suffix color",
    //     description: "Set the color of the suffix",
    //     category: "Bridge Module",
    //     subcategory: "⭍Customize",
    //     options: [
    //         "§0Black",
    //         "§1Dark Blue",
    //         "§2Dark Green",
    //         "§3Dark Aqua",
    //         "§4Dark Red",
    //         "§5Dark Purple",
    //         "§6Gold",
    //         "§7Gray",
    //         "§8Dark Grey",
    //         "§9Blue",
    //         "§aGreen",
    //         "§bAqua",
    //         "§cRed",
    //         "§dLight Purple",
    //         "§eYellow",
    //         "§fWhite",
    //     ]
    // }) customGuildRankColor = 6;


    constructor() {
        this.initialize(this);
    }

}
export default new Settings();