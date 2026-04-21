$html = Get-Content -Raw -Path .\main.html
$cssMatch = [regex]::Match($html, '(?s)<style>\s*(.*?)\s*</style>')
if ($cssMatch.Success) {
    $css = $cssMatch.Groups[1].Value
    # Use UTF8 encoding without BOM
    [System.IO.File]::WriteAllText("$PWD\main.css", $css, [System.Text.Encoding]::UTF8)
}

$jsMatch = [regex]::Match($html, '(?s)<script>\s*(.*?)\s*</script>')
if ($jsMatch.Success) {
    $js = $jsMatch.Groups[1].Value
    [System.IO.File]::WriteAllText("$PWD\main.js", $js, [System.Text.Encoding]::UTF8)
}

$html = $html -replace '(?s)<style>.*?</style>', '<link rel="stylesheet" href="main.css">'
$html = $html -replace '(?s)<script>.*?</script>', '<script src="main.js"></script>'
[System.IO.File]::WriteAllText("$PWD\main.html", $html, [System.Text.Encoding]::UTF8)
