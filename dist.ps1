if (Test-Path .\..\MisterJ936) {
     if (Test-Path .\..\MisterJ936\dist) {
          Remove-Item ".\..\MisterJ936\dist"
     }
     Copy-Item -Path ".\dist" -Destination ".\..\MisterJ936" -Recurse -Force
} else {
     Write-Warning "Directory MisterJ936 Doesnt Exist"
}