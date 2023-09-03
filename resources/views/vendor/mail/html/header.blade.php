@props(['url'])
<tr>
    <td class="header">
        <a href="{{ $url }}" style="display: inline-block;">
            <img src="{{ asset('/appLogo.png') }}" class="logo" alt="{{ $slot }}">
        </a>
    </td>
</tr>