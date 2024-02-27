def add_game_to_html(game_name, game_link):
    # Read the HTML file
    with open('referral.html', 'r') as file:
        html_content = file.read()

    # Find the position to insert the new game content
    insertion_index = html_content.find('<h1 class="titles" style="color: #000000;">Other referral links</h1>')
    if insertion_index == -1:
        # Handle if the insertion point is not found
        print("Error: Insertion point not found in HTML file")
        return

    # Construct the HTML content for the new game
    new_game_content = f"""
        <div class="container">
            <div class="content-box">
                <h2>{game_name}</h2>
                <p>Use this referral link to buy {game_name} and you will get 25% off your purchase!</p>
                <a class="button" href="{game_link}" target="_blank">Open in Meta App</a>
            </div>
        </div>
    """

    # Find the position to insert the new game content alphabetically
    start_index = insertion_index + len('<h1 class="titles" style="color: #000000;">Other referral links</h1>')
    end_index = html_content.find('</main>', start_index)
    existing_games = html_content[start_index:end_index]

    # Alphabetically arrange existing games
    game_names = []
    start = 0
    while True:
        h2_start = existing_games.find('<h2>', start)
        if h2_start == -1:
            break
        h2_end = existing_games.find('</h2>', h2_start)
        game_names.append(existing_games[h2_start + len('<h2>'):h2_end])
        start = h2_end

    game_names.append(game_name)
    game_names.sort()

    new_game_index = game_names.index(game_name)

    start_index = insertion_index + len('<h1 class="titles" style="color: #000000;">Other referral links</h1>')
    end_index = html_content.find('</main>', start_index)

    # Constructing new HTML content with new game inserted alphabetically
    modified_html_content = html_content[:start_index]
    for name in game_names[:new_game_index]:
        modified_html_content += existing_games.partition(f"<h2>{name}</h2>")[0]
    modified_html_content += new_game_content
    for name in game_names[new_game_index+1:]:
        modified_html_content += existing_games.partition(f"<h2>{name}</h2>")[0]
    modified_html_content += html_content[end_index:]

    # Write the modified HTML content back to the file
    with open('referral.html', 'w') as file:
        file.write(modified_html_content)

# Ask for user input for game name and link
game_name = input("Enter the game name: ")
game_link = input("Enter the game link: ")

# Call the function to add the game to the HTML
add_game_to_html(game_name, game_link)
